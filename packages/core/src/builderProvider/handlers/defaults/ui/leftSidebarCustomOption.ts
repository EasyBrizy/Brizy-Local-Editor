//#region Open Callback

interface Data {
  id: string;
  type: "topTabsOrder" | "bottomTabsOrder";
}

export type OpenHandler = (data: Data, uid: string) => Promise<void>;

export const getOpenCB = (
  data: {
    id: Data["id"];
    type: Data["type"];
    handler: OpenHandler;
  },
  uid: string,
) => {
  const handler = async () => {
    try {
      await data.handler({ id: data.id, type: data.type }, uid);
    } catch (e) {
      console.error("Error in OpenHandler", e);
    }
  };

  return handler;
};

//#endregion

//#region Close Callback

interface CloseData {
  id: string;
  type: "topTabsOrder" | "bottomTabsOrder";
}

export type CloseHandler = (data: CloseData, uid: string) => Promise<void>;

export const getCloseCB = (
  data: {
    id: CloseData["id"];
    type: CloseData["type"];
    handler: CloseHandler;
  },
  uid: string,
) => {
  const handler = async () => {
    try {
      await data.handler(
        {
          id: data.id,
          type: data.type,
        },
        uid,
      );
    } catch (e) {
      console.error("Error in CloseHandler", e);
    }
  };

  return handler;
};

//#endregion
