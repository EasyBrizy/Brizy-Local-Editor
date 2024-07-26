import { getItems } from "@/lib/items/getItems";
import React from "react";

const styles = {
  padding: "10px 10px",
  borderBottom: "1px solid #ccc",
};

export default async function AdminPage() {
  const items = await getItems();

  return (
    <div>
      {items.map((page) => {
        const { item, collection } = page.slug;

        return (
          <div key={page.id} style={styles}>
            <a href={`/admin/${collection}/${item}`}>
              {collection}: {item}
            </a>
          </div>
        );
      })}
    </div>
  );
}
