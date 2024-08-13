import { Size } from "@/api/collections/featuredImage/types";
import { ShopifyClient } from "../../index";

const query = `
query getProductById($id: ID!,$cW:Int,$cH:Int) {
    product(id: $id) {
        featuredImage {
            url(transform: { maxWidth: $cW, maxHeight: $cH })
        }
    }
}
`;

export const getProductFeaturedImage = async (id: string, size: Size) => {
  const { cW, cH } = size;
  const _cW = Number(cW);
  const _cH = Number(cH);

  const { data, errors } = await ShopifyClient.request(query, {
    variables: {
      id,
      cH: _cH,
      cW: _cW,
    },
  });

  if (errors) {
    console.error(errors);
    throw new Error("Failed to retrieve product");
  }

  const { featuredImage } = data.product ?? {};

  return featuredImage?.url ?? "";
};
