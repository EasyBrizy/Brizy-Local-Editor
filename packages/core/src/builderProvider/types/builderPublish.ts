import { Response } from "@/types/common";
import { BuilderPublishedData } from "./builderOutput";

export interface BuilderPublish {
  handler: (res: Response<BuilderPublishedData>, rej: Response<string>, extra: BuilderPublishedData) => void;
}
