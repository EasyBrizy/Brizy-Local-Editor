import { deleteFont } from "@/lib/db/fonts/deleteFont";
import { getFont } from "@/lib/db/fonts/getFont";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!id || !ObjectId.isValid(id)) {
      return new Response("Valid Font ID is required", { status: 400 });
    }

    return await getFont(id);
  } catch (error) {
    console.error("Error streaming font:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!id) {
      return new Response("Valid Font ID is required", { status: 400 });
    }

    await deleteFont(id);

    return new Response(id, { status: 200 });
  } catch (error) {
    console.error("Error deleting font:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
