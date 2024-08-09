"use client";

import { Metadata as NextMetadata } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { fetchMetadata } from "./utils";

export const Metadata = () => {
  const [metadata, setMetadata] = useState<NextMetadata | null>(null);

  useEffect(() => {
    async function getMetadata() {
      const { seo, sharing } = (await fetchMetadata()) ?? {};

      setMetadata({
        title: seo.title ?? "",
        description: seo.description ?? "",
        openGraph: {
          title: sharing.title ?? "",
          description: sharing.description ?? "",
        },
      });
    }

    getMetadata();
  }, []);

  return metadata ? (
    <head>
      {metadata.title && <title>{String(metadata.title ?? "")}</title>}
      {metadata.description && <meta name="description" content={metadata.description} />}
      {metadata?.openGraph?.title && <meta property="og:title" content={String(metadata.openGraph.title)} />}
      {metadata?.openGraph?.description && <meta property="og:description" content={metadata.openGraph.description} />}
    </head>
  ) : null;
};
