"use client";

import { Metadata as NextMetadata } from "next";
import { forwardRef, useEffect, useRef, useState } from "react";
import { fetchMetadata } from "./utils";

export const Metadata = forwardRef<HTMLElement>(function Component(_, bodyRef) {
  const [metadata, setMetadata] = useState<NextMetadata | null>(null);
  const [customCss, setCustomCss] = useState("");
  const [codeInjectionFooter, setCodeInjectionFooter] = useState("");
  const [codeInjectionHeader, setCodeInjectionHeader] = useState("");

  useEffect(() => {
    async function getMetadata() {
      const { seo, sharing, code } = (await fetchMetadata()) ?? {};

      setMetadata({
        title: seo.title ?? "",
        description: seo.description ?? "",
        openGraph: {
          title: sharing.title ?? "",
          description: sharing.description ?? "",
        },
      });

      if (code) {
        setCustomCss(code.customCss ?? "");
        setCodeInjectionFooter(code.codeInjectionFooter ?? "");
        setCodeInjectionHeader(code.codeInjectionHeader ?? "");
      }
    }

    getMetadata();
  }, []);

  useEffect(() => {
    const refElement = bodyRef && "current" in bodyRef ? bodyRef.current : null;

    if (refElement) {
      if (codeInjectionHeader) {
        refElement.insertAdjacentHTML("afterbegin", codeInjectionHeader);
      }

      if (codeInjectionFooter) {
        refElement.insertAdjacentHTML("beforeend", codeInjectionFooter);
      }
    }
  }, [bodyRef, codeInjectionHeader, codeInjectionFooter]);

  return metadata ? (
    <head>
      {metadata.title && <title>{String(metadata.title ?? "")}</title>}
      {metadata.description && <meta name="description" content={metadata.description} />}
      {metadata?.openGraph?.title && <meta property="og:title" content={String(metadata.openGraph.title)} />}
      {metadata?.openGraph?.description && <meta property="og:description" content={metadata.openGraph.description} />}
      {customCss && <style>{customCss}</style>}
    </head>
  ) : null;
});
