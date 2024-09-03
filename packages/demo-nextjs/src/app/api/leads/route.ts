import { createLead } from "@/lib/db/leads/createLead";
import { deleteLead } from "@/lib/db/leads/deleteLead";
import { getLeads } from "@/lib/db/leads/getLeads";
import { getPaginationData } from "@/utils/pagination";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const projectId = req.nextUrl.searchParams.get("project_id");
    const _page = parseInt(req.nextUrl.searchParams.get("page") ?? "1");
    const currentPage = _page >= 1 ? _page : 1;
    const skip = currentPage - 1;
    const itemsPerPage = parseInt(req.nextUrl.searchParams.get("items_per_page") ?? "100");
    const pagination = {
      limit: itemsPerPage,
      skip: itemsPerPage * skip,
    };

    if (!projectId) {
      return NextResponse.json({ success: false, error: "Missing project id" }, { status: 400 });
    }

    const { items: leads, total } = await getLeads(projectId, pagination);
    const payload = getPaginationData({ total, currentPage, itemsPerPage, skip });

    const normalisedLeads = leads.map(({ _id, data, createdAt }) => ({
      id: _id,
      data: JSON.parse(data),
      createdAt,
    }));

    return NextResponse.json({ success: true, data: normalisedLeads, payload }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to get leads" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = formData.get("data");
    const projectId = formData.get("project_id");

    if (!data || !projectId) {
      return NextResponse.json({ success: false, error: "Missing data" }, { status: 400 });
    }

    const lead = await createLead({
      data: data.toString(),
      projectId: projectId.toString(),
    });

    return NextResponse.json({ success: true, data: lead }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to create lead" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const data = await req.json();

    const ids = data.ids;

    if (!Array.isArray(ids)) {
      return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });
    }

    for (const _id of ids) {
      await deleteLead(_id);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "Fail to delete item" }, { status: 400 });
  }
}
