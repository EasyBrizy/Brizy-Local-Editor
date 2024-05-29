import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next App + Brizy Local",
  description: "Brizy Local Builder",
};

interface Props {
  children: ReactNode;
}

export default function PreviewLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
