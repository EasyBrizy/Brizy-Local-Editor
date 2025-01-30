import { getProject } from "@/lib/db/project/getProject";
import { updateProject } from "@/lib/db/project/updateProject";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id") ?? "";
    const project = await getProject(id);
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
    const project = await updateProject(id, { settings });

    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 400 });
  }
}
