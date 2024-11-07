import { Page as PageComponent } from "@/components/Preview/Page";
import { getItem } from "@/lib/db/item/getItem";
import { getProject } from "@/lib/db/project/getProject";
import { CollectionTypes } from "@/lib/db/types";
import { assemblePages } from "@/utils";
import { convertItem } from "@/utils/converters/item";
import { convertProject } from "@/utils/converters/project";
import { projectId } from "@/utils/mock";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params }: Props) {
  try {
    const project = await getProject(projectId).then(convertProject);
    const page = await getItem({
      type: CollectionTypes.story,
      item: params.slug,
    }).then(convertItem);


    if (!page.data.compiled || !project.data.compiled) {
      notFound();
    }

    const { html, scripts, styles, projectStyles } = await assemblePages({
      items: [page.data.compiled],
      project: project.data.compiled,
    });
    const _styles = [...projectStyles, ...styles];

    return <PageComponent html={html} scripts={scripts} styles={_styles} />;
  } catch (e) {
    console.log("Error:", e);
    notFound();
  }
}
