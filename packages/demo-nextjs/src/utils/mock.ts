//#region Project

export const projectId = 1;

//#endregion

//#region Pages

export enum VercelPageIds {
  HomePage = "1",
}

export enum NetlifyPageIds {
  HomePage = "17",
}

//#region Page

export const homePageId = { collection: "page", item: "home" };

//#endregion

//#region Popups

export const popupPageId = { collection: "popup", item: "popup-test" };

//#endregion

//#region Header & Footer

export const headerId = { collection: "header", item: "home" };
export const footerId = { collection: "footer", item: "home" };

//#endregion

//#region Config

export function getPageIds() {
  const type = process.env.DEMO_TYPE;

  switch (type) {
    case "vercel": {
      return VercelPageIds;
    }
    case "netlify": {
      return NetlifyPageIds;
    }
  }

  throw Error(`Unknown demo page ${type}`);
}

//#endregion
