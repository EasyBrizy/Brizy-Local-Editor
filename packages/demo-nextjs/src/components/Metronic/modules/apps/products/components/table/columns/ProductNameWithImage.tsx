import { toStaticUrl } from "@/components/Metronic/helpers";
import Image from "next/image";
import { FC, useContext } from "react";
import { ProductsContext } from "../../../core/ProductsContext";

interface Props {
  title: string;
  featuredImage?: {
    url: string;
  };
  previewUrl: string;
}

const imageStyle = {
  height: "50px",
  objectFit: "cover" as const,
};

export const ProductNameWithImage: FC<Props> = ({ title, featuredImage, previewUrl }) => {
  const { defaultProductPageUrl } = useContext(ProductsContext);
  const src = featuredImage?.url ?? toStaticUrl("media/placeholders/empty-image.jpg");

  const previewLink = previewUrl || defaultProductPageUrl;

  return (
    <div className="d-flex align-items-center">
      <Image src={src} width={50} height={50} alt="product_img" style={imageStyle} />
      <a className="ms-5 text-gray-800 text-hover-primary fs-5 fw-bold" href={previewLink} target="_blank">
        {title}
      </a>
    </div>
  );
};
