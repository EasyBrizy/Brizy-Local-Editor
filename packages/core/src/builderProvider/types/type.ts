import { LoadCollectionItemsHandler } from "@/builderProvider/handlers/api/collectionItems/loadCollectionItems";
import { SearchCollectionItemsHandler } from "@/builderProvider/handlers/api/collectionItems/searchCollectionItems";
import { PostHandler } from "@/builderProvider/handlers/defaults/elements/posts";
import { DeleteFontHandler, GetFontHandler, UploadFontHandler } from "@/builderProvider/handlers/integration/font";
import type { Response } from "@/types/common";
import { AutoSaveOutput, BuilderOutput, RequiredOutput } from "@/types/types";
import type { GetCollectionItemsHandler } from "../handlers/api/collectionItems/getCollectionItems";
import { LoadCollectionTypesHandler } from "../handlers/api/collectionTypes";
import type { AddCustomFileHandler } from "../handlers/api/customFile";
import type { AddMediaHandler } from "../handlers/api/media";
import { CreateScreenshotsHandler, UpdateScreenshotsHandler } from "../handlers/api/screenshots";
import {
  KitsDataHandler,
  KitsHandler,
  KitsMetaHandler,
  LayoutsDataHandler,
  LayoutsMetaHandler,
  LayoutsPagesHandler,
  PopupsDataHandler,
  PopupsMetaHandler,
  StoriesDataHandler,
  StoriesMetaHandler,
  StoriesPagesHandler,
} from "../handlers/api/templates";
import { CloseHandler, OpenHandler } from "../handlers/defaults/ui/leftSidebarCustomOption";
import { PublishHandler } from "../handlers/defaults/ui/publish";
import { DCHandler } from "../handlers/dynamicContent/handler";
import { ImageDCHandler } from "../handlers/dynamicContent/image";
import { LinkDCHandler } from "../handlers/dynamicContent/link";
import { PlaceholderDataHandler } from "../handlers/dynamicContent/placeholder";
import { RichTextDCHandler } from "../handlers/dynamicContent/text";
import { FormFieldsHandler } from "../handlers/integration/form";

export type Handler<T, R, E> = (res: Response<T>, rej: Response<R>, extra?: E) => void;

export interface ExposedHandlers {
  addMedia: AddMediaHandler;
  addFile: AddCustomFileHandler;
  getKits: KitsHandler;
  getKitsMeta: KitsMetaHandler;
  getKitsData: KitsDataHandler;
  getPopupsMeta: PopupsMetaHandler;
  getPopupsData: PopupsDataHandler;
  getLayoutsMeta: LayoutsMetaHandler;
  getLayoutsData: LayoutsDataHandler;
  getLayoutsPages: LayoutsPagesHandler;
  getStoriesMeta: StoriesMetaHandler;
  getStoriesData: StoriesDataHandler;
  getStoriesPages: StoriesPagesHandler;
  loadCollectionTypes: LoadCollectionTypesHandler;
  getCollectionItems: GetCollectionItemsHandler;
  searchCollectionItems: SearchCollectionItemsHandler;
  loadCollectionItems: LoadCollectionItemsHandler;
  createScreenshot: CreateScreenshotsHandler;
  updateScreenshot: UpdateScreenshotsHandler;
  handleDCRichText: RichTextDCHandler;
  handleDCImage: ImageDCHandler;
  handleDCLink: LinkDCHandler;
  dcHandler: DCHandler;
  getPlaceholderData: PlaceholderDataHandler;
  onLoad: (uid: string) => void;
  onAutoSave: (output: AutoSaveOutput, uid: string) => void;
  getFormFields: FormFieldsHandler;
  getFormFields2: FormFieldsHandler;
  save: (output: BuilderOutput) => void;
  compile: (output: RequiredOutput, uid: string) => void;

  // LeftSidebar CustomOption
  onLeftSidebarOpenHandler: OpenHandler;
  onLeftSidebarCloseHandler: CloseHandler;

  publish: PublishHandler;
  onOpenMenu: (uid: string) => void;
  postsHandler: PostHandler;
  uploadFont: UploadFontHandler;
  getFont: GetFontHandler;
  deleteFont: DeleteFontHandler;
}
