import { deleteItem } from "@/lib/db/item/deleteItem";
import { getItem } from "@/lib/db/item/getItem";
import { getItems } from "@/lib/db/item/getItems";
import { newItem } from "@/lib/db/item/newItem";
import { updateItem } from "@/lib/db/item/updateItem";
import { NextRequest, NextResponse } from "next/server";

interface Payload {
  pagination: {
    page: number;
    items_per_page: number;
    total: number;
    links: Array<{
      label: string;
      active: boolean;
      url: string | null;
      page: number | null;
    }>;
  };
}

export async function POST(req: Request) {
  try {
    const { pageData, config, slug } = await req.json();
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
    const search = req.nextUrl.searchParams.get("search");
    const _page = parseInt(req.nextUrl.searchParams.get("page") ?? "1");
    const currentPage = _page >= 1 ? _page : 1;
    const skip = currentPage - 1;
    const itemsPerPage = parseInt(req.nextUrl.searchParams.get("items_per_page") ?? "100");
    const pagination = {
      limit: itemsPerPage,
      skip: itemsPerPage * skip,
    };
    const endIndex = pagination.skip + pagination.limit;

    const queries = new Map<string, string | RegExp>();

    if (collection) {
      queries.set("slug.collection", collection);
    }

    if (search) {
      queries.set("slug.item", new RegExp(search, "i"));
    }

    const qs: Record<string, string | RegExp> = {};

    queries.forEach((value, key) => {
      qs[key] = value;
    });

    const { items, total } = await getItems(qs, pagination);

    const payload: Payload = {
      pagination: {
        total,
        page: currentPage,
        items_per_page: itemsPerPage,
        links: [],
      },
    };

    const startLink =
      currentPage > 0
        ? { url: `/?page=${currentPage - 1}`, active: false, page: currentPage - 1, label: "Previous" }
        : { url: null, active: false, page: null, label: "Previous" };

    payload.pagination.links.push(startLink);

    const pages = Array(Math.ceil(total / pagination.limit)).fill(0);

    pages.forEach((_, i) => {
      const page = i + 1;
      payload.pagination.links.push({
        page,
        active: page === skip,
        label: `${page}`,
        url: `/?page=${page}`,
      });
    });

    const endLink =
      endIndex < total
        ? { url: `/?page=${currentPage + 1}`, active: false, page: currentPage + 1, label: "Next" }
        : { url: null, active: false, page: null, label: "Next" };

    payload.pagination.links.push(endLink);

    return NextResponse.json(
      {
        success: true,
        data: items.map((i) => ({
          id: i._id,
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
      const item = await getItem({ _id: _id });

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
