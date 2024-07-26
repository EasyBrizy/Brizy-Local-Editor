import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { pageData, id } = await req.json();
    const schema = {
      id,
      data: JSON.stringify(pageData),
    };

    await DBConnect();

    await Models.Items.findOneAndUpdate({ _id: id }, schema, {
      new: true,
      upsert: true,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fail to update page" }, { status: 400 });
  }
}
