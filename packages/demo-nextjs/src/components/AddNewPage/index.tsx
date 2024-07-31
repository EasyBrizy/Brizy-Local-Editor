"use client";

import { newItem } from "@/lib/items/newItem";
import { useRouter } from "next/navigation";
import React, { ReactElement, useCallback, useState } from "react";

interface Props {
  collection: string;
  item: string;
}

export const AddNewPage = (props: Props): ReactElement => {
  const { collection, item } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNew = useCallback(async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const id = crypto.randomUUID();
      const slug = { collection, item };
      await newItem({ id, slug });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }, [collection, item, loading, router]);

  return <button onClick={handleNew}>{loading ? "Loading..." : `Add new ${collection}`}</button>;
};
