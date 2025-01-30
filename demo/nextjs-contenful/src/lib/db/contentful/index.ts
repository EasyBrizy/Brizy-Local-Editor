import { getConfig } from "@/config";
import * as contentful from "contentful-management";

const environmentId = "development";

const token = getConfig().contentfulToken;
const space = getConfig().contentfulSpace;

const client = contentful.createClient(
  {
    accessToken: token,
  },
  {
    type: "plain",
    defaults: {
      spaceId: space,
      environmentId: environmentId,
    },
  },
);

export { client };
