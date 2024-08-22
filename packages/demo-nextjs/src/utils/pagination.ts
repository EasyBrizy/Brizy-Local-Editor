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

interface Data {
  total: number;
  currentPage: number;
  itemsPerPage: number;
  skip: number;
}

export const getPaginationData = ({ total, currentPage, itemsPerPage, skip }: Data) => {
  const payload: Payload = {
    pagination: {
      total,
      page: currentPage,
      items_per_page: itemsPerPage,
      links: [],
    },
  };

  const pagination = {
    limit: itemsPerPage,
    skip: itemsPerPage * skip,
  };

  const endIndex = pagination.skip + pagination.limit;

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

  return payload;
};
