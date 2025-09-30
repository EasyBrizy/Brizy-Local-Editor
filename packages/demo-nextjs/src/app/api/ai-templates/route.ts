import { getAiTemplate } from "@/lib/db/ai/getAiTemplate";
import { newItem } from "@/lib/db/item/newItem";
import { CollectionTypes } from "@/lib/db/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json({ message: "Missing sessionId" }, { status: 400 });
  }

  const template = await getAiTemplate(sessionId);
  const pages = template.pages.map((p) => JSON.parse(p));

  const newPages = pages.map(async (p) => {
    const page = p.pageData;
    const id = Math.random().toString(36).slice(2);
    const collectionType = CollectionTypes.page;
    const slug = `${collectionType}-ai-${id}`;
    const collection = {
      id,
      slug: {
        collection: collectionType,
        item: slug,
      },
      data: JSON.stringify({ data: JSON.parse(page) }),
      config: {
        hasPreview: true,
        deletable: true,
      },
    };

    await newItem(collection);

    return collection;
  });

  const createdPages = await Promise.all(newPages);
  const firstItem = createdPages[0];
  const goToEditorURL = new URL(`/admin/${CollectionTypes.page}/${firstItem.slug.item}`, request.url);

  return NextResponse.redirect(goToEditorURL);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("POST Request", body);
  return NextResponse.json({ message: "POST Request Received" });
}
