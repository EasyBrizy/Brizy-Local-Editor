"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

let sessionId: string | undefined = undefined;

const Pages: FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (sessionId) {
      return;
    }

    setLoading(true);

    try {
      const rs = await fetch("http://localhost/api/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "12345",
        }),
      });
      const data = await rs.json();

      if (data.sessionId) {
        sessionId = data.sessionId;
        const url = new URL("http://localhost/api/get-started/project");
        url.searchParams.append("sessionId", `${sessionId}`);
        url.searchParams.append("callbackUrl", "http://localhost:3000/api/ai-template");
        router.push(url.toString());
      } else {
        console.error("Failed to create session");
      }
    } catch (error) {
      console.error("Failed to create session", error);
    }

    setLoading(false);
  };

  return (
    <Root>
      <PageTitle breadcrumbs={Breadcrumbs}>Pages</PageTitle>
      <div style={{ textAlign: "center" }}>
        <button type="button" className="btn btn-primary" onClick={handleGenerate}>
          {loading ? "Generating..." : "Generate new page with ai"}
        </button>
      </div>
      <CollectionsListWrapper collection="page" />
    </Root>
  );
};

export default Pages;
