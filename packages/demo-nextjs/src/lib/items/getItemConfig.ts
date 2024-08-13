import DBConnect from "@/lib/db/connect";
import Models from "@/lib/db/models";
import { getPageData, getProjectData } from "@/lib/editorConfig";
import { demoConfig } from "@/lib/editorConfig/demoConfig";
import { getProject } from "@/lib/project/getProject";

interface Data {
  collection: string;
  item: string;
}

export async function getItemConfig(data: Data) {
  const { item, collection } = data;
  const query = {
    "slug.collection": collection,
    "slug.item": item,
  };

  await DBConnect();

  const page = await Models.Items.findOne(query);

  if (!page) {
    throw new Error("Fail to get page");
  }

  const project = await getProject();

  return {
    ...demoConfig,
    pageData: getPageData(page),
    projectData: getProjectData(project),
    platform: "shopify",
    templateType: "shopify-page",
    contentDefaults: {
      ProductMetafield: {
        sourceType: "shopify-product",
      },
      PostTitle: {
        textPopulation: "{{brizy_dc_post_title}}",
        textPopulationEntityType: "",
        textPopulationEntityId: "",
        _population: {
          name: "brizy_dc_post_title",
          placeholder: "{{brizy_dc_post_title}}",
        },
      },
      PostContent: {
        textPopulation: "{{brizy_dc_post_content}}",
        textPopulationEntityType: "",
        textPopulationEntityId: "",
        _population: {
          name: "brizy_dc_post_content",
          placeholder: "{{brizy_dc_post_content}}",
        },
      },
      AddToCart: {
        sourceType: "shopify-product",
      },
      Quantity: {
        sourceType: "shopify-product",
      },
      Variant: {
        sourceType: "shopify-product",
      },
      FeaturedImage: {
        linkSource: "shopify-page",
      },
    },
  };
}
