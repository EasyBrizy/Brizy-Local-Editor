import { Size } from "@/api/collections/featuredImage/types";
import { fetchShopifyGraphQLData } from "../index";

const query = `
query getProductFeaturedImage($id: ID!, $cW: Int, $cH: Int) {
    product(id: $id) {
        featuredImage {
            url(transform: { maxWidth: $cW, maxHeight: $cH })
        }
    }
}
`;

export const getProductFeaturedImage = async (productId: string, size: Size) => {
  const { cW, cH } = size;
  const data = await fetchShopifyGraphQLData(query, { id: productId, cW, cH });
  const { featuredImage } = data.product ?? {};

  return featuredImage?.url ?? "";
};
