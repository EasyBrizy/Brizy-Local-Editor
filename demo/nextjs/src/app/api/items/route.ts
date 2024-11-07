import { deleteItem } from "@/lib/db/item/deleteItem";
import { getItem } from "@/lib/db/item/getItem";
import { getItems } from "@/lib/db/item/getItems";
import { newItem } from "@/lib/db/item/newItem";
import { updateItem } from "@/lib/db/item/updateItem";
import { getPaginationData } from "@/utils/pagination";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { pageData, config, slug } = await req.json();

    const reference = JSON.parse(config?.reference ?? "null");

    if (reference) {
      try {
        const { collectionId } = reference;

        // if already an item with the same collectionId exist, then we return that item instead of creating a new one
        const item = await getItem({
          type: slug.collection,
          reference: collectionId,
        });

        return NextResponse.json({ success: true, data: item }, { status: 200 });
      } catch (e) {
        console.log(e);
      }
    }

    const schema = {
      ...(config && { config }),
      ...(slug && { slug }),
      ...(pageData && { data: JSON.stringify(pageData) }),
    };

    const item = await newItem(schema);

    return NextResponse.json({ success: true, data: item }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "Fail to update page" }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const { pageData, id, config, slug } = await req.json();
    const schema = {
      ...(config && { config }),
      ...(slug && { slug }),
      ...(pageData && { data: JSON.stringify(pageData) }),
    };

    await updateItem(id, schema);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "Fail to update page" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const collection = req.nextUrl.searchParams.get("collection");

    if (!collection) {
      return NextResponse.json({ success: false, error: "Invalid collection" }, { status: 400 });
    }

    const search = req.nextUrl.searchParams.get("search");
    const referenceId = req.nextUrl.searchParams.get("referenceId");
    const _page = parseInt(req.nextUrl.searchParams.get("page") ?? "1");
    const currentPage = _page >= 1 ? _page : 1;
    const skip = currentPage - 1;
    const itemsPerPage = parseInt(req.nextUrl.searchParams.get("items_per_page") ?? "100");
    const pagination = {
      limit: itemsPerPage,
      skip: itemsPerPage * skip,
    };

    const qs = {
      type: collection,
      ...(search && { search }),
      ...(referenceId && { reference: referenceId }),
    };

    const { items, total } = await getItems(qs, pagination);

    const payload = getPaginationData({
      total,
      currentPage,
      itemsPerPage,
      skip,
    });

    return NextResponse.json(
      {
        success: true,
        data: items.map((i) => ({
          id: i.id,
          slug: i.slug,
          config: i.config,
          data: i.data,
          createdAt: i.createdAt,
        })),
        payload,
      },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "Fail to get items" }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const data = await req.json();

    const ids = data.ids;

    if (!Array.isArray(ids)) {
      return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });
    }

    for (const _id of ids) {
      const item = await getItem({ id: _id });

      if (!item) {
        return NextResponse.json({ success: false, error: "Item not found" }, { status: 400 });
      }

      if (item.config?.deletable) {
        await deleteItem(_id);
        continue;
      }

      return NextResponse.json({ success: false, error: `Item: ${_id} cannot be deleted` }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "Fail to delete item" }, { status: 400 });
  }
}
