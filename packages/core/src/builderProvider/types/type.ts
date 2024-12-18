import type { Response } from "@/types/common";
import { AutoSaveOutput, BuilderOutput, HtmlOutputType } from "@/types/types";
import type { GetCollectionItemsHandler } from "../handlers/api/collectionItems";
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
import { OpenCMSHandler } from "../handlers/defaults/ui/cms";
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
  createScreenshot: CreateScreenshotsHandler;
  updateScreenshot: UpdateScreenshotsHandler;
  handleDCRichText: RichTextDCHandler;
  handleDCImage: ImageDCHandler;
  handleDCLink: LinkDCHandler;
  dcHandler: DCHandler;
  getPlaceholderData: PlaceholderDataHandler;
  onLoad: (uid: string) => void;
  onAutoSave: (output: AutoSaveOutput<HtmlOutputType>, uid: string) => void;
  getFormFields: FormFieldsHandler;
  save: (output: BuilderOutput<HtmlOutputType>) => void;
  onOpenCMS: OpenCMSHandler;
  onCloseCMS: (uid: string) => void;
  publish: PublishHandler<HtmlOutputType>;
  onOpenMenu: VoidFunction;
}
