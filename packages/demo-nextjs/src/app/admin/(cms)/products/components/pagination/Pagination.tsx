import { ProductsContext } from "@/app/admin/(cms)/products/components/core/ProductsContext";
import clsx from "clsx";
import { useContext, useMemo } from "react";

export const Pagination = () => {
  const { itemsPerPage, totalItems, currentPage, setCurrentPage } = useContext(ProductsContext);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = useMemo(() => [...Array(totalPages)].map((_, i) => i + 1), [totalPages]);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
        <div id="kt_table_users_paginate" className="dt-paging paging_simple_numbers">
          <ul className="pagination">
            <li
              className={clsx("page-item", {
                disabled: currentPage === 1,
              })}
            >
              <a className="page-link cursor-pointer" onClick={() => setCurrentPage(currentPage - 1)}>
                <i className="previous"></i>
              </a>
            </li>
            {pages.map((v) => (
              <li
                key={v}
                className={clsx("page-item", {
                  active: currentPage === v,
                })}
                onClick={() => setCurrentPage(v)}
              >
                <a className="page-link cursor-pointer">{v}</a>
              </li>
            ))}
            <li
              className={clsx("page-item", {
                disabled: currentPage === pages.length,
              })}
            >
              <a className="page-link cursor-pointer" onClick={() => setCurrentPage(currentPage + 1)}>
                <i className="next"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
