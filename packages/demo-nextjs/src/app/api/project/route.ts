import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { projectData, id } = await req.json();
    const schema = {
      id,
      data: JSON.stringify(projectData),
    };

    await DBConnect();

    await Models.Project.findOneAndUpdate({ id }, schema, {
      new: true,
      upsert: true,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to update project" }, { status: 400 });
  }
}
