import clsx from "clsx";
import { FC, useCallback, useMemo } from "react";
import { PaginationState } from "../../../../../helpers";
import { PaginationLabel } from "./types";

const mappedLabel = (label: string): string => {
  if (label === "&laquo; Previous" || label === "Previous") {
    return PaginationLabel.Previous;
  }

  if (label === "Next &raquo;" || label === "Next") {
    return PaginationLabel.Next;
  }

  return label;
};

interface Props {
  pagination: PaginationState;
  isLoading: boolean;
  updateState: (updates: Partial<PaginationState>) => void;
}

const Pagination: FC<Props> = ({ pagination, isLoading, updateState }) => {
  const updatePage = useCallback(
    (page: number | undefined | null) => {
      if (!page || isLoading || pagination.page === page) {
        return;
      }

      updateState({ page, items_per_page: pagination.items_per_page || 10 });
    },
    [isLoading, pagination, updateState],
  );

  const PAGINATION_PAGES_COUNT = 5;
  const sliceLinks = (pagination?: PaginationState) => {
    if (!pagination?.links?.length) {
      return [];
    }

    const scopedLinks = [...pagination.links];

    let pageLinks: Array<{
      label: string;
      active: boolean;
      url: string | null;
      page: number | null;
    }> = [];
    const previousLink: { label: string; active: boolean; url: string | null; page: number | null } =
      scopedLinks.shift()!;
    const nextLink: { label: string; active: boolean; url: string | null; page: number | null } = scopedLinks.pop()!;

    const halfOfPagesCount = Math.floor(PAGINATION_PAGES_COUNT / 2);

    pageLinks.push(previousLink);

    if (pagination.page <= Math.round(PAGINATION_PAGES_COUNT / 2) || scopedLinks.length <= PAGINATION_PAGES_COUNT) {
      pageLinks = [...pageLinks, ...scopedLinks.slice(0, PAGINATION_PAGES_COUNT)];
    }

    if (pagination.page > scopedLinks.length - halfOfPagesCount && scopedLinks.length > PAGINATION_PAGES_COUNT) {
      pageLinks = [...pageLinks, ...scopedLinks.slice(scopedLinks.length - PAGINATION_PAGES_COUNT, scopedLinks.length)];
    }

    if (
      !(pagination.page <= Math.round(PAGINATION_PAGES_COUNT / 2) || scopedLinks.length <= PAGINATION_PAGES_COUNT) &&
      !(pagination.page > scopedLinks.length - halfOfPagesCount)
    ) {
      pageLinks = [
        ...pageLinks,
        ...scopedLinks.slice(pagination.page - 1 - halfOfPagesCount, pagination.page + halfOfPagesCount),
      ];
    }

    pageLinks.push(nextLink);

    return pageLinks;
  };

  const renderPaginationButton = useCallback(
    (type: PaginationLabel) => {
      const isPrevious = type === PaginationLabel.Previous;
      const { page, links } = pagination;

      const disabledPrevious = isPrevious && page === 1;
      const disabledNext = !isPrevious && page === (links?.length || 3) - 2;
      const isDisabled = isLoading || disabledPrevious || disabledNext;
      const className = clsx("page-item", { disabled: isDisabled, [type]: type });

      const newPage = isPrevious ? page - 1 : page + 1;

      return (
        <li className={className} key={type}>
          <a className="page-link cursor-pointer" onClick={() => updatePage(newPage)}>
            <i className={type}></i>
          </a>
        </li>
      );
    },
    [isLoading, pagination, updatePage],
  );

  const paginationLinks = useMemo(() => sliceLinks(pagination), [pagination]);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
        <div id="kt_table_users_paginate" className="dt-paging paging_simple_numbers">
          <ul className="pagination">
            {paginationLinks
              ?.map((link) => ({ ...link, label: mappedLabel(link.label) }))
              .map((link) =>
                link.label === PaginationLabel.Previous || link.label === PaginationLabel.Next ? (
                  renderPaginationButton(link.label)
                ) : (
                  <li
                    key={link.label}
                    className={clsx("page-item", {
                      active: pagination.page === link.page,
                      disabled: isLoading,
                    })}
                  >
                    <a
                      className={clsx("page-link", {
                        "page-text": link.label === "Previous" || link.label === "Next",
                        "me-5": link.label === "Previous",
                      })}
                      onClick={() => updatePage(link.page)}
                      style={{ cursor: "pointer" }}
                    >
                      {mappedLabel(link.label)}
                    </a>
                  </li>
                ),
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Pagination };
