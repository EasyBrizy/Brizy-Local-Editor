import { ProductsContext } from "@/app/admin/(cms)/products/components/core/ProductsContext";
import { KTIcon } from "@/components/Metronic/helpers";
import { createCollection } from "@/components/Metronic/modules/apps/collections/core/_requests";
import Link from "next/link";
import { FC, useContext } from "react";
import { useMutation } from "react-query";

interface Props {
  id: string;
  previewUrl: string;
}

const extractLastId = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 1];
};

const SHOPIFY_BASE_URL = "https://admin.shopify.com/store";

export const ProductActionsCell: FC<Props> = ({ id, previewUrl }) => {
  const { defaultProductPageUrl, shopName } = useContext(ProductsContext);

  const handleEdit = useMutation(async () => {
    const collectionType = "product";
    const reference = JSON.stringify({ collectionId: id, collectionType });
    const { data } = await createCollection(collectionType, reference);

    const { slug } = data?.data;

    location.replace(`/admin/product/${slug.item}`);
  }, {});

  const shopifyEditUrl = `${SHOPIFY_BASE_URL}/${shopName}/products/${extractLastId(id)}`;

  const previewUrlLink = previewUrl || defaultProductPageUrl;

  return (
    <div className="d-flex gap-3">
      <Link href="#" onClick={async () => await handleEdit.mutateAsync()} title="Edit">
        <KTIcon iconName="pencil" className="fs-3" />
      </Link>
      <a href={previewUrlLink} title="Preview">
        <KTIcon iconName="home" className="fs-3" />
      </a>
      <Link href={shopifyEditUrl} title="Edit in Shopify">
        <KTIcon iconName="shop" className="fs-3" />
      </Link>
    </div>
  );
};
