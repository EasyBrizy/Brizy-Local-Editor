import { ContentPlaceholder, ContextInterface } from "@brizy/content-placeholder";
import { PostPlaceholder } from "./PostPlaceholder";
import { PlaceholderType } from "./types";

const renderPageItem = (page: number, isCurrent: boolean) => `
      <li>
        <a
          class="page-numbers ${isCurrent ? "current" : ""}"
          href="${isCurrent ? "#" : `?page=${page}`}"
        >
          ${page}
        </a>
      </li>
    `;

export class PostPaginationPlaceholder extends PostPlaceholder {
  constructor() {
    super("PostsPagination Placeholder", PlaceholderType.PostPagination);
  }

  public async getValue(context: ContextInterface, placeholder: ContentPlaceholder): Promise<string> {
    const { paginationInfo } = (await this.getItems(context, placeholder)) ?? {};
    const { items_per_page = 0, total = 0 } = paginationInfo ?? {};

    const totalPages = Math.ceil(total / items_per_page);
    const currentPage = this.getCurrentPage(context);

    let paginationItems: string;

    // This case will happen when in page is another post element and his pagination is greater than the total pages
    if (currentPage > totalPages) {
      return "";
    }

    if (totalPages <= 4) {
      // If there are 4 or fewer pages, display all pages
      paginationItems = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return renderPageItem(page, page === currentPage);
      }).join("");
    } else if (currentPage <= 3) {
      // Case 1: Current page is among the first three
      paginationItems = `
          ${renderPageItem(1, currentPage === 1)}
          ${renderPageItem(2, currentPage === 2)}
          ${renderPageItem(3, currentPage === 3)}
          ${renderPageItem(4, currentPage === 4)}
          <li><span class="page-numbers dots">&hellip;</span></li>
          ${renderPageItem(totalPages, currentPage === totalPages)}
        `;
    } else if (currentPage >= totalPages - 2) {
      // Case 2: Current page is among the last three
      paginationItems = `
          ${renderPageItem(1, currentPage === 1)}
          <li><span class="page-numbers dots">&hellip;</span></li>
          ${renderPageItem(totalPages - 3, currentPage === totalPages - 3)}
          ${renderPageItem(totalPages - 2, currentPage === totalPages - 2)}
          ${renderPageItem(totalPages - 1, currentPage === totalPages - 1)}
          ${renderPageItem(totalPages, currentPage === totalPages)}
        `;
    } else {
      // Case 3: Current page is somewhere in the middle
      paginationItems = `
          ${renderPageItem(1, currentPage === 1)}
          <li><span class="page-numbers dots">&hellip;</span></li>
          ${renderPageItem(currentPage - 1, false)}
          ${renderPageItem(currentPage - 2, false)}
          ${renderPageItem(currentPage, true)}
          ${renderPageItem(currentPage + 1, false)}
          ${renderPageItem(currentPage + 2, false)}
          <li><span class="page-numbers dots">&hellip;</span></li>
          ${renderPageItem(totalPages, currentPage === totalPages)}
        `;
    }

    return `
        <div class="brz-posts__pagination">
            <ul class="page-numbers">
                ${paginationItems}
            </ul>
        </div>
    `;
  }
}
