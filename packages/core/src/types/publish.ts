import { Output } from "@/types/types";
import { PageData, ProjectData, Response } from "./common";

export interface PublishData {
  projectData?: PageData;
  pageData?: ProjectData;
}

export interface Publish {
  handler: (res: Response<PublishData>, rej: Response<string>, extra: Output) => void;
}
