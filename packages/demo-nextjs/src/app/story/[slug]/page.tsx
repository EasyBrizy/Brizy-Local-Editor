import { Page as PageComponent } from "@/components/Preview/Page";
import { CollectionTypes, getItem, getProject } from "@/lib/preview";
import { assemblePages } from "@/utils";
import { projectId } from "@/utils/mock";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  try {
    const project = await getProject(projectId);
    const _page = await getItem({ collection: CollectionTypes.Story, item: params.slug }).then(
      (document) => document.data.compiled,
    );

    const { html, scripts, styles, projectStyles } = assemblePages({ items: [_page], project });
    const _styles = [...projectStyles, ...styles];

    return <PageComponent html={html} scripts={scripts} styles={_styles} />;
  } catch (e) {
    console.log("Error:", e);
    notFound();
  }
}
