import { ItemsPerPage } from "@/components/Metronic/helpers";
import { getCollections } from "@/components/Metronic/modules/apps/collections/core/_requests";
import { ProductsContext } from "@/components/Metronic/modules/apps/products/core/ProductsContext";
import { CollectionTypes } from "@/lib/db/types";
import { useContext, useMemo, useReducer, useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts, getProductsCount } from "../core/_requests";
import { ProductQueryResponse } from "../core/types";
import { ActionTypes, fetchProductsReducer, initialState } from "./reducer";

export const useFetchProducts = (currentPage: number, itemsPerPage: ItemsPerPage) => {
  const [{ products, shopName, collectionsLoading }, dispatch] = useReducer(fetchProductsReducer, initialState);

  const { refetch, isLoading, isRefetching } = useQuery<ProductQueryResponse>(
    ["products", currentPage],
    () => fetchProducts(currentPage, itemsPerPage),
    {
      refetchOnWindowFocus: false,
      onSuccess: async ({ products, shopName }) => {
        dispatch({ type: ActionTypes.SET_COLLECTIONS_LOADING, payload: true });

        const updatedProducts = await Promise.all(
          products.map(async (product) => {
            const { data } = await getCollections(`collection=${CollectionTypes.product}&referenceId=${product.id}`);
            const [page] = data ?? [];
            return page ? { ...product, url: `/${page.slug.collection}/${page.slug.item}` } : product;
          }),
        );

        dispatch({
          type: ActionTypes.SET_ALL,
          payload: {
            products: updatedProducts,
            shopName,
            collectionsLoading: false,
          },
        });
      },
      onError: () => {
        dispatch({
          type: ActionTypes.SET_COLLECTIONS_LOADING,
          payload: false,
        });
      },
    },
  );

  const isFetching = isLoading || isRefetching || collectionsLoading;

  return { products, shopName, isLoading: isFetching, refetch };
};

export const useDefaultProductPageUrl = () => {
  const [defaultProductPageUrl, setDefaultProductPageUrl] = useState("");

  const { isLoading } = useQuery("system-product", () => getCollections("collection=system&search=product"), {
    refetchOnWindowFocus: false,
    onSuccess: ({ data }) => {
      const [page] = data ?? [];
      if (page) {
        const { item, collection } = page.slug;
        if (item) {
          setDefaultProductPageUrl(`/${collection}/${item}`);
        }
      }
    },
  });

  return {
    defaultProductPageUrl,
    isLoading,
  };
};

export const useFetchProductsCount = () => {
  const [totalItems, setTotalItems] = useState(0);

  const { isLoading } = useQuery<number>(["products-count"], getProductsCount, {
    refetchOnWindowFocus: false,
    onSuccess: setTotalItems,
  });

  return { totalItems, isLoading };
};

export const useProductPagination = () => {
  const { pagination } = useContext(ProductsContext);
  const { total, currentPage, pageSize, setPage } = pagination;

  const totalPages = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  const paginationData = useMemo(() => {
    const createLink = (label: string, page: number) => ({
      label,
      active: currentPage === page,
      url: null,
      page,
    });

    return {
      total,
      page: currentPage,
      items_per_page: pageSize,
      links: [
        createLink("Previous", currentPage - 1),
        ...pages.map((page) => createLink(page.toString(), page)),
        createLink("Next", currentPage + 1),
      ],
    };
  }, [total, currentPage, pageSize, pages]);

  const updatePage = (page?: number) => {
    if (page && page !== currentPage) {
      setPage(page);
    }
  };

  return { pagination: paginationData, updatePage };
};
