import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { NextRequest, NextResponse } from "next/server";

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

export async function GET(req: NextRequest) {
  try {
    console.log(req.nextUrl.searchParams.get("collection"));
    await DBConnect();
    const items = await Models.Items.find();

    return NextResponse.json({ success: true, data: items }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Fail to get items" }, { status: 400 });
  }
}
