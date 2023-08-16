import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { AddFileData, AddFileExtra } from "@/types/customFile";

interface FileHandler extends HandlerData {
  res: Response<AddFileData>;
  rej: Response<string>;
}

function handleAddFile(data: FileHandler) {
  const { uid, target, res, rej } = data;

  return function fileEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_add_file_res`: {
          const fileName = action.data.fileName;
          const uid = action.data.uid ?? fileName;

          // @ts-expect-error any is not assignable to parameter of type AddFileData
          res({ uid: uid, filename: fileName });
          window.removeEventListener("message", fileEmitter);
          break;
        }
        case `${target}_add_file_rej`: {
          rej(action.data);
          window.removeEventListener("message", fileEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid AddFile JSON", e);
    }
  };
}

export const addCustomFileHandler = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<AddFileData, string, AddFileExtra> = (res, rej, extra) => {
    const data = JSON.stringify({ type: `${target}_add_file`, payload: extra });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleAddFile({ res, rej, uid, target, event }));
  };

  return handler;
};
