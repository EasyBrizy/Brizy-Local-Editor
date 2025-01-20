import { Output } from "@/types/types";
import { PageDataOutput, ProjectDataOutput, Response } from "./common";

export interface PublishData {
  projectData?: ProjectDataOutput;
  pageData?: PageDataOutput;
}

export interface Publish {
  handler: (res: Response<PublishData>, rej: Response<string>, extra: Output) => void;
}
