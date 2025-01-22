import { updateProject } from "@/lib/db/project/updateProject";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { projectData, id } = await req.json();
    const schema = {
      id,
      data: JSON.stringify(projectData),
    };

    await updateProject(id, schema);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to update project" }, { status: 400 });
  }
}
