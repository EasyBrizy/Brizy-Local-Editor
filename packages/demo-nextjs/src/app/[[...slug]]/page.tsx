import { Page as PageComponent } from "@/components/Preview/Page";
import { getItem } from "@/lib/db/item/getItem";
import { getItems } from "@/lib/db/item/getItems";
import { getProject } from "@/lib/db/project/getProject";
import { CollectionTypeValue, CollectionTypes } from "@/lib/db/types";
import { assemblePages } from "@/utils";
import { convertItem } from "@/utils/converters/item";
import { convertProject } from "@/utils/converters/project";
import { footerQuery, headerQuery, projectId } from "@/utils/mock";
import { isT } from "fp-utilities";
import { notFound } from "next/navigation";

const excludeCatchAllCollection = [CollectionTypes.popup, CollectionTypes.story];

export default async function Page({
  params,
}: {
  params: { slug: string[]; searchParams: { [key: string]: string | string[] | undefined } };
}) {
  const [collection, item] = (params.slug ?? []) as [CollectionTypeValue, string];
  let slug = { collection: CollectionTypes.page, item: "home" };

  if (typeof collection !== "undefined" && typeof item === "undefined") {
    slug = { ...slug, item: collection };
  }

  if (typeof collection !== "undefined" && typeof item !== "undefined") {
    slug = { collection, item };
  }

  if (excludeCatchAllCollection.includes(slug.collection)) {
    notFound();
  }

  try {
    const page = await getItem({ type: slug.collection, item: slug.item }).then(convertItem);

    const { reference } = page.config ?? {};
    const referenceValue = reference ? JSON.parse(reference) : null;

    if (!page.data.compiled || !page.config?.hasPreview) {
      notFound();
    }

    const project = await getProject(projectId).then(convertProject);

    if (!project.data.compiled) {
      notFound();
    }

    const headerPage = await getItem(headerQuery).then(convertItem);
    const footerPage = await getItem(footerQuery).then(convertItem);
    const popups = await getItems({ type: CollectionTypes.popup }).then((i) =>
      i.items.map(convertItem).map((i) => i.data.compiled),
    );
    const items = [headerPage.data.compiled, page.data.compiled, footerPage.data.compiled, ...popups].filter(isT);

    const { html, scripts, styles } = await assemblePages({
      items,
      project: project.data.compiled,
      reference: referenceValue,
    });

    return <PageComponent html={html} scripts={scripts} styles={styles} />;
  } catch (e) {
    console.log("Error:", e);
    notFound();
  }
}
