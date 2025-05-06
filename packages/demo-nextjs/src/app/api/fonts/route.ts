import { getFonts } from "@/lib/db/fonts/getFonts";
import { uploadFonts } from "@/lib/db/fonts/upload";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getFonts();

    if (!data) {
      return NextResponse.json({ success: false, error: "No fonts found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error("Error getting fonts:", e);
    return NextResponse.json({ success: false, error: "Failed to get fonts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const id = formData.get("id")?.toString();
    const name = formData.get("name")?.toString();

    if (!id || !name) {
      return NextResponse.json({ success: false, error: "Missing id, name, or project_id" }, { status: 400 });
    }

    const files: Record<string, Record<string, File>> = {};
    for (const [key, value] of Array.from(formData.entries())) {
      if (value instanceof File) {
        const [type, fileType] = key.split("_");
        if (!type || !fileType) continue;

        if (!files[type]) files[type] = {};
        files[type][fileType] = value;
      }
    }

    if (Object.keys(files).length === 0) {
      return NextResponse.json({ success: false, error: "No files uploaded" }, { status: 400 });
    }

    const data = await uploadFonts({
      id,
      files,
      name,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Font upload error:", error);
    return NextResponse.json({ success: false, error: "Failed to upload font" }, { status: 500 });
  }
}
