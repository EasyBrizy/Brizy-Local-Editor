import { Metadata } from "@/components/Metadata";
import "@/styles/globals.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <Metadata />
      <body>{children}</body>
    </html>
  );
}
