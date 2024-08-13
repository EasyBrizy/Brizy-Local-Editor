import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    await DBConnect();

    const project = await Models.Project.findOne({ id });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const parsedSettings = JSON.parse(project.settings || "{}");

    return NextResponse.json(
      {
        success: true,
        data: parsedSettings,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to get project" }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const { projectSettings, id } = await req.json();

    const settings = JSON.stringify(projectSettings);

    await DBConnect();

    const changedDoc = await Models.Project.findOneAndUpdate(
      { id },
      { $set: { settings: settings } },
      {
        new: true,
      },
    );

    if (!changedDoc) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: changedDoc }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 400 });
  }
}
