import { getItems } from "@/lib/items/getItems";
import React from "react";

const styles = {
  padding: "10px 10px",
  borderBottom: "1px solid #ccc",
};

export default async function AdminPage() {
  const items = await getItems();
  const groups: { [k: string]: Array<{ collection: string; item: string }> } = {};

  items.forEach((page) => {
    const { collection, item } = page.slug;
    const group = { collection, item };

    if (groups[collection]) {
      groups[collection].push(group);
    } else {
      groups[collection] = [group];
    }
  });

  return (
    <div>
      {Object.entries(groups).map(([collection, items]) => {
        return (
          <div key={collection}>
            <h4>{collection}: </h4>
            {items.map((page) => (
              <div key={page.item} style={styles}>
                <a href={`/admin/${collection}/${page.item}`}>{page.item}</a>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
