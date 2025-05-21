import { BuilderPublishedData } from "@/builderProvider/types/builderOutput";
import { BuilderPublish } from "@/builderProvider/types/builderPublish";
import { Handler } from "@/builderProvider/types/type";
import { addThirdPartyAssets } from "@/builderProvider/utils/thirdParty";
import { CompileManagerType } from "@/compileManager";
import { PublishData } from "@/types/publish";
import { BuilderOutput } from "@/types/types";

export type PublishHandler = (uid: string, extra: BuilderOutput) => Promise<PublishData>;

export interface PublishHandlerData {
  publishHandler: PublishHandler;
  compileManager: CompileManagerType;
  uid: string;
}

export const getPublish = (data: PublishHandlerData): BuilderPublish => {
  const { publishHandler, uid, compileManager } = data;

  const handler: Handler<BuilderPublishedData, string, BuilderPublishedData> = async (res, rej, _extra) => {
    if (!_extra) {
      rej("Error publishing");
      return;
    }

    const data = _extra;
    const extra = addThirdPartyAssets({ data });
    try {
      const output = compileManager.prepareHTML(extra);
      await publishHandler(uid, output);
      res(_extra);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error publishing";
      rej(message);
    }
  };

  return { handler };
};
