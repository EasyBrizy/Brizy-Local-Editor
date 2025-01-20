import { getProjectSettings } from "@/app/admin/(cms)/system/core/requests";
import { defaultThemeAttr } from "@/components/Metronic/layout/core/_LayoutConfig";
import "@/styles/globals.css";
import { projectId } from "@/utils/mock";
import type { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const projectSettings = await getProjectSettings(projectId);

  const { seo, sharing } = projectSettings || {};
  const { title = "", description = "" } = seo || {};
  const { title: sharingTitle = "", description: sharingDescription = "" } = sharing || {};

  return {
    title,
    description,
    openGraph: {
      title: sharingTitle,
      description: sharingDescription,
    },
  };
}

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className="brz" {...defaultThemeAttr}>{children}</body>
    </html>
  );
}
