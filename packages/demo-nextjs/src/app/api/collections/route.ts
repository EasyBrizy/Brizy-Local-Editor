import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { NextResponse } from "next/server";

export async function GET() {
  await DBConnect();

  const items = await Models.Items.find();

  if (!items || items.length === 0) {
    return NextResponse.json(
      {
        success: false,
        error: "No items found",
      },
      {
        status: 404,
      },
    );
  }

  const collections = await Models.Items.aggregate([
    { $group: { _id: "$slug.collection" } },
    { $project: { _id: 0, collection: "$_id" } },
  ]);

  return NextResponse.json({
    success: true,
    data: collections.map((item) => item.collection),
  });
}
