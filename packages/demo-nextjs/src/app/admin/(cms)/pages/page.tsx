"use client";

import Root from "@/components/Metronic/layout/Root";
import { PageTitle } from "@/components/Metronic/layout/core";
import { CollectionsListWrapper } from "@/components/Metronic/modules/apps/collections/CollectionsList";
import { Breadcrumbs } from "@/constants/Breadcrumbs";
import { createAIRedirectUrl } from "@/lib/db/ai/createAIRedirectUrl";
import { createAiSession } from "@/lib/db/ai/createAiSession";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const Pages: FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const sessionId = await createAiSession();
      const aiUrl = createAIRedirectUrl(sessionId, "http://localhost:3000");
      router.push(aiUrl);
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
