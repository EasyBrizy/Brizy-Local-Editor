import { KTIcon } from "@/components/Metronic/helpers";
import { SHOPIFY_BASE_URL } from "@/utils/mock";
import Link from "next/link";
import { FC, useContext } from "react";
import { ProductsContext } from "../../../core/ProductsContext";

interface Props {
  id: string;
  previewUrl: string;
}

const extractProductId = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 1];
};

export const ProductActionsCell: FC<Props> = ({ id, previewUrl }) => {
  const { defaultProductPageUrl, shopName, onEditProduct } = useContext(ProductsContext);
  const productID = extractProductId(id);

  const shopifyEditUrl = `${SHOPIFY_BASE_URL}/${shopName}/products/${productID}`;

  const previewUrlLink = previewUrl || defaultProductPageUrl;

  return (
    <div className="d-flex gap-3">
      <Link href="#" onClick={() => onEditProduct(id)} title="Edit">
        <KTIcon iconName="pencil" className="fs-3" />
      </Link>
      <Link href={shopifyEditUrl} title="Edit in Shopify" target="_blank">
        <KTIcon iconName="switch" className="fs-3" />
      </Link>
      <a href={previewUrlLink} title="Preview" target="_blank">
        <KTIcon iconName="exit-right-corner" className="fs-3" />
      </a>
    </div>
  );
};
