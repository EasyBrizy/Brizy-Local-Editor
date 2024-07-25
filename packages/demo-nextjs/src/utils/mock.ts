//#region Project

export const projectId = 1;

//#endregion

//#region Pages

export enum VercelPageIds {
  HomePage = "1",
  IntegrationsPage = "6",
  CustomersPage = "7",
  EnterprisePage = "8",
  PricingPage = "9",
  ContactPage = "10",
  PreviewsPage = "11",
  InfrastructurePage = "12",
  NextjsPage = "13",
  AnalyticsPage = "14",
  EdgePage = "15",
  StoragePage = "16",
}

export enum NetlifyPageIds {
  HomePage = "17",
  IntegrationsPage = "18",
  CustomersPage = "19",
  EnterprisePage = "20",
  PricingPage = "21",
  ContactPage = "22",
  PreviewsPage = "23",
  InfrastructurePage = "24",
  NextjsPage = "25",
  AnalyticsPage = "26",
  EdgePage = "27",
  StoragePage = "28",
}

//#region Story

export const storyPageId = "1";

//#endregion

//#region Popups

export const popupPageId = "1";

//#endregion

//#region Header & Footer

export const headerId = "1";
export const footerId = "1";

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
