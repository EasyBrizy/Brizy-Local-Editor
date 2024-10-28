import { Response } from "@/types/common";
import { BlocksArray, DefaultBlock, LayoutsPages, StoryTemplate } from "@/types/templates";

//#region Meta
type GetStoriesMeta = (res: Response<StoryTemplate>, rej: Response<string>) => Promise<void>;
export type StoriesMetaHandler = (uid: string) => Promise<StoryTemplate>;

export const getStoriesMeta = (storiesMetaHandler: StoriesMetaHandler, uid: string) => {
  const handler: GetStoriesMeta = async (res, rej) => {
    try {
      const data = await storiesMetaHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching stories meta";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Data
type Page = {
  id: string;
  layoutId: string;
};
type GetStoriesData = (res: Response<BlocksArray<DefaultBlock>>, rej: Response<string>, page: Page) => Promise<void>;
export type StoriesDataHandler = (page: Page, uid: string) => Promise<BlocksArray<DefaultBlock>>;

export const getStoriesData = (storiesDataHandler: StoriesDataHandler, uid: string) => {
  const handler: GetStoriesData = async (res, rej, page) => {
    try {
      const data = await storiesDataHandler(page, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching stories data";
      rej(message);
    }
  };

  return handler;
};

//#endregion

//#region Pages
type GetStoriesPages = (res: Response<LayoutsPages>, rej: Response<string>, id: string) => Promise<void>;
export type StoriesPagesHandler = (id: string, uid: string) => Promise<LayoutsPages>;

export const getStoriesPages = (storiesPagesHandler: StoriesPagesHandler, uid: string) => {
  const handler: GetStoriesPages = async (res, rej, id) => {
    try {
      const data = await storiesPagesHandler(id, uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error fetching stories pages";
      rej(message);
    }
  };

  return handler;
};

//#endregion
