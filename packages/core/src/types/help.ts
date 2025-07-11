interface HelpVideo {
  category: string;
  id: string;
  items: {
    id: string;
    title: string;
    url: string;
  }[];
}

interface HelpHeader {
  src: string;
  url: string;
}

export enum HelpVideoTypes {
  addElementsHelpVideo = "addElementsHelpVideo",
  blocksLayoutsHelpVideo = "blocksLayoutsHelpVideo",
  fontsHelpVideo = "fontsHelpVideo",
  formHelpVideo = "formHelpVideo",
}

type HelpVideoTypesKeys = keyof typeof HelpVideoTypes;

export type HelpVideosData = {
  [k in HelpVideoTypesKeys]: string;
};

export interface Help {
  header: HelpHeader;
  idHelpVideosIcons: HelpVideosData;
  showIcon?: boolean;
  video?: HelpVideo[];
}
