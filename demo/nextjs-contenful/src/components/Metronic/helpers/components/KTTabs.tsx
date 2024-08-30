import clsx from "clsx";
import { FC } from "react";

interface Tab {
  title: string;
  href: string;
}

interface Props {
  tabs: Tab[];
  className?: string;
}

export const KTTabs: FC<Props> = ({ tabs, className }) => (
  <ul className={clsx("nav nav-tabs nav-line-tabs", className)}>
    {tabs.map(({ href, title }, index) => (
      <li key={index} className="nav-item">
        <a
          className={clsx("nav-link text-active-primary pb-4", {
            active: index === 0,
          })}
          data-bs-toggle="tab"
          href={href}
        >
          {title}
        </a>
      </li>
    ))}
  </ul>
);
