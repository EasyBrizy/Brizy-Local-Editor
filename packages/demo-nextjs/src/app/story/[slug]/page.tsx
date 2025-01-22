import { Page as PageComponent } from "@/components/Preview/Page";
import { getItem } from "@/lib/db/item/getItem";
import { getProject } from "@/lib/db/project/getProject";
import { CollectionTypes } from "@/lib/db/types";
import { assemblePages } from "@/utils";
import { convertItem } from "@/utils/converters/item";
import { convertProject } from "@/utils/converters/project";
import { projectId } from "@/utils/mock";
import { notFound } from "next/navigation";
import { SearchParams } from "../../types";

interface Props {
  params: { slug: string };
  searchParams: SearchParams;
}

export default async function Page({ params, searchParams }: Props) {
  try {
    const project = await getProject(projectId).then(convertProject);
    const page = await getItem({
      type: CollectionTypes.story,
      item: params.slug,
    }).then(convertItem);

    const { reference } = page.config ?? {};
    const referenceValue = reference ? JSON.parse(reference) : null;

    if (!page.data.compiled || !project.data.compiled) {
      notFound();
    }

    const { html, scripts, styles } = await assemblePages({
      items: [page.data.compiled],
      project: project.data.compiled,
      reference: referenceValue,
      searchParams,
    });

    return <PageComponent html={html} scripts={scripts} styles={styles} />;
  } catch (e) {
    console.log("Error:", e);
    notFound();
  }
}
