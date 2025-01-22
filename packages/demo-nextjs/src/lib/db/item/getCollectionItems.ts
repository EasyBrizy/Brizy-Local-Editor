import { getPaginationData } from "@/utils/pagination";
import { getItems } from "./getItems";
import { readSort, readSortBy } from "./utils";

type GetCollectionItemsArgs = {
  collection: string;
  currentPage?: number;
  search?: string;
  sortBy?: string;
  sort?: string;
  offset?: number;
  itemsCount?: number;
  include?: string[];
  exclude?: string[];
};

export async function getCollectionItems({
  collection,
  search,
  currentPage = 1,
  sortBy,
  sort,
  offset = 0,
  itemsCount = 100,
  include,
  exclude,
}: GetCollectionItemsArgs) {
  const _sortBy = readSortBy(sortBy);
  const _sort = readSort(sort);
  const skip = currentPage - 1;

  const pagination = {
    limit: itemsCount,
    skip: itemsCount * skip + offset,
    sortBy: _sortBy,
    sort: _sort,
  };

  const qs = {
    type: collection,
    ...(search && { search }),
    ...(include && { include }),
    ...(exclude && { exclude }),
  };

  const { items, total } = await getItems(qs, pagination);

  const paginationData = getPaginationData({
    total,
    currentPage,
    itemsPerPage: itemsCount,
    skip: 0,
  });

  const data = items.map((i) => ({ id: i.id, title: i.slug.item }));

  return { data, pagination: paginationData.pagination };
}
