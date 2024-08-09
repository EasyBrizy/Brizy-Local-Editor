"use client";

import { Metadata } from "@/components/Metadata";
import "@/styles/globals.css";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  const bodyRef = useRef<HTMLBodyElement>(null);

  return (
    <html lang="en">
      <Metadata ref={bodyRef} />
      <body ref={bodyRef}>{children}</body>
    </html>
  );
}
