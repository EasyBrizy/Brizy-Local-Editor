import { CollectionItem } from "@/api/collections/collectionItems";
import { BrizyProduct } from "@/widgets/Cart/export/types";

export interface __VISUAL_CONFIG__ extends Record<string, unknown> {
  api?: {
    collectionItems?: {
      getCollectionItems?: {
        handler?: (res: Response<CollectionItem[]>, rej: Response<string>, extra: { id: string }) => void;
      };
    };
  };
  pageData: {
    reference?: {
      collectionId?: string;
    };
  };
}

declare global {
  var Brizy: {
    config: {
      getAll: () => __VISUAL_CONFIG__;
    };
  };

  interface Window {
    brizyProducts: BrizyProduct;
  }
}
