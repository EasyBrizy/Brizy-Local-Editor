import { Page as PageComponent } from "@/components/Preview/Page";
import {
  CollectionTypeValue,
  CollectionTypes,
  getAllPopups,
  getCompiledData,
  getItem,
  getProject,
} from "@/lib/preview";
import { assemblePages } from "@/utils";
import { footerId, headerId, projectId } from "@/utils/mock";
import { notFound } from "next/navigation";

const excludeCatchAllCollection = [CollectionTypes.Popup, CollectionTypes.Story];

export default async function Page({
  params,
}: {
  params: { slug: string[]; searchParams: { [key: string]: string | string[] | undefined } };
}) {
  const [collection, item] = (params.slug ?? []) as [CollectionTypeValue, string];
  let slug = { collection: CollectionTypes.Page, item: "home" };

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
    const { page, hasPreview } = await getItem(slug).then((document) => ({
      page: document.data.compiled,
      hasPreview: document.config.hasPreview,
    }));

    if (!page || !hasPreview) {
      notFound();
    }

    const project = await getProject(projectId);
    const headerPage = await getItem(headerId).then((document) => document.data.compiled);
    const footerPage = await getItem(footerId).then((document) => document.data.compiled);

    const popups = getCompiledData(await getAllPopups());

    const { html, scripts, styles, projectStyles } = assemblePages({
      items: [headerPage, page, footerPage, ...popups],
      project,
    });
    const _styles = [...projectStyles, ...styles];
    return <PageComponent html={html} scripts={scripts} styles={_styles} />;
  } catch (e) {
    console.log("Error:", e);
    notFound();
  }
}
