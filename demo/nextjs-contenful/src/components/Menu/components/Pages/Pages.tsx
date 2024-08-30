import { TreeItem, TreeItems } from "@/components/Menu/types";
import { KTIcon } from "@/components/Metronic/helpers";
import React from "react";

interface Props {
  items: TreeItems;
  addMenuItem: (item: TreeItem) => Promise<void>;
}

export function Pages({ items, addMenuItem }: Props) {
  return (
    <div className="col-md-3 card mr-10">
      <div className="card-header">
        <h2 className="card-title fs-1">Pages</h2>
      </div>
      <div className="card-body">
        {items.length > 0 ? <List items={items} addMenuItem={addMenuItem} /> : "No page founds..."}
      </div>
    </div>
  );
}

function List({ items, addMenuItem }: Props) {
  return (
    <ul className="p-0 ">
      {items.map((item) => {
        return (
          <li key={item.id} className="d-flex align-items-center mb-5">
            <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3 capitalize">{item.name}</span>
            <button onClick={() => addMenuItem(item)} className="btn btn-sm btn-icon ">
              <KTIcon iconName="plus-circle" iconType="solid" className="fs-1 p-0" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
