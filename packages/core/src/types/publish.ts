import { HtmlOutputType, Output } from "@/types/types";
import { PageDataOutput, ProjectDataOutput, Response } from "./common";

export interface PublishData<T extends HtmlOutputType> {
  projectData?: ProjectDataOutput<T>;
  pageData?: PageDataOutput<T>;
}

export interface Publish<T extends HtmlOutputType> {
  handler: (res: Response<PublishData<T>>, rej: Response<string>, extra: Output<T>) => void;
}
