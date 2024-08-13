import { fetchProducts, getProductsCount } from "@/app/admin/(cms)/products/core/requests";
import { WithChildren } from "@/components/Metronic/helpers";
import { getCollections } from "@/components/Metronic/modules/apps/collections/core/_requests";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Product } from "../../core/types";
import { ProductsContext } from "./ProductsContext";

interface Response {
  products: Product[];
  shopName: string;
}

export const ProductsProvider: FC<WithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultProductPageUrl, setDefaultProductPageUrl] = useState("");
  const [shopName, setShopName] = useState("");

  const { refetch: refetchProducts, isLoading } = useQuery<Response>(["products"], () => fetchProducts(currentPage), {
    onSuccess: async ({ products, shopName }) => {
      const data = await Promise.all(
        products.map(async (product) => {
          const { data } = await getCollections(`referenceId=${product.id}`);

          const [page] = data ?? [];

          if (!page) {
            return product;
          }

          return {
            ...product,
            url: `/${page.slug.collection}/${page.slug.item}`,
          };
        }),
      );

      setProducts(data);
      setShopName(shopName);
    },
    refetchOnWindowFocus: false,
  });

  useQuery("system-product", () => getCollections("collection=system&search=product"), {
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

  useQuery<number>(["products-count"], getProductsCount, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setTotalItems(data);
    },
  });

  useEffect(() => {
    refetchProducts();
  }, [currentPage, refetchProducts]);

  const contextValue = {
    products,
    totalItems,
    currentPage,
    itemsPerPage: 20,
    setCurrentPage,
    isLoading,
    defaultProductPageUrl,
    shopName,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};
