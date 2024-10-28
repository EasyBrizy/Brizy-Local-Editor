import { Handler } from "@/builderProvider/types/type";
import { addThirdPartyAssets } from "@/builderProvider/utils/thirdParty";
import { Publish, PublishData } from "@/types/publish";
import { HtmlOutputType } from "@/types/types";

export type PublishHandler<T extends HtmlOutputType> = (
  uid: string,
  extra?: PublishData<HtmlOutputType>,
) => Promise<PublishData<T>>;

export interface PublishHandlerData<T extends HtmlOutputType> {
  assetsType: HtmlOutputType;
  publishHandler: PublishHandler<T>;
  uid: string;
}

export const getPublish = <T extends HtmlOutputType>(data: PublishHandlerData<T>): Publish<T> => {
  const { publishHandler, assetsType, uid } = data;

  const handler: Handler<PublishData<T>, string, PublishData<T>> = async (res, rej, _extra) => {
    let extra = addThirdPartyAssets({ data: _extra, assetsType });
    try {
      const data = await publishHandler(uid, extra);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error publishing";
      rej(message);
    }
  };

  return { handler };
};
