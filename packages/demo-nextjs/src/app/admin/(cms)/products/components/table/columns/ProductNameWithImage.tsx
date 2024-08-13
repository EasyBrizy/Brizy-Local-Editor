import { ProductsContext } from "@/app/admin/(cms)/products/components/core/ProductsContext";
import { toStaticUrl } from "@/components/Metronic/helpers";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";

interface Props {
  title: string;
  featuredImage?: {
    url: string;
  };
  url: string;
}

const imageStyle = {
  height: "50px",
  objectFit: "cover" as const,
};

export const ProductNameWithImage: FC<Props> = ({ title, featuredImage, url }) => {
  const { defaultProductPageUrl } = useContext(ProductsContext);
  const src = featuredImage?.url ?? toStaticUrl("media/placeholders/placeholder-image.jpg");

  const link = url || defaultProductPageUrl;

  return (
    <div className="d-flex align-items-center">
      <Image src={src} width={50} height={50} alt="product_img" style={imageStyle} />
      <a className="ms-5 text-gray-800 text-hover-primary fs-5 fw-bold" href={link}>
        {title}
      </a>
    </div>
  );
};
