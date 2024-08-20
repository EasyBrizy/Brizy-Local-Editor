import { WithChildren } from "@/components/Metronic/helpers";
import { createCollection } from "@/components/Metronic/modules/apps/collections/core/_requests";
import { ProductsContextModel } from "@/components/Metronic/modules/apps/products/core/types";
import { CollectionTypes } from "@/lib/db/types";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDefaultProductPageUrl, useFetchProducts, useFetchProductsCount } from "../hooks";
import { ProductsContext } from "./ProductsContext";

const ITEMS_PER_PAGE = 20;

export const ProductsProvider: FC<WithChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    refetch: refetchProducts,
    isLoading: isFetchingProducts,
    products,
    shopName,
  } = useFetchProducts(currentPage, ITEMS_PER_PAGE);

  const { defaultProductPageUrl, isLoading: isFetchingDefaultProductPage } = useDefaultProductPageUrl();

  const { totalItems, isLoading: isFetchingProductsCount } = useFetchProductsCount();

  useEffect(() => {
    refetchProducts();
  }, [currentPage, refetchProducts]);

  const handleEditProduct = useMutation(async (id: string) => {
    try {
      const collectionType = CollectionTypes.product;
      const reference = JSON.stringify({ collectionId: id, collectionType });
      const { data } = await createCollection(collectionType, reference);

      const { slug } = data;

      location.replace(`/admin/product/${slug.item}`);
    } catch (e) {
      console.error("Error while creating collection", e);
    }
  }, {});

  const contextValue: ProductsContextModel = {
    products,
    isLoading: isFetchingProducts || isFetchingProductsCount || isFetchingDefaultProductPage,
    defaultProductPageUrl,
    shopName,
    pagination: {
      total: totalItems,
      pageSize: ITEMS_PER_PAGE,
      currentPage,
      setPage: setCurrentPage,
    },
    onEditProduct: handleEditProduct.mutateAsync,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};
