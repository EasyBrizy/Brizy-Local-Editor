import { Product } from "@/components/Metronic/modules/apps/products/types";

interface State {
  products: Product[];
  shopName: string;
  collectionsLoading: boolean;
}

export const initialState: State = {
  products: [],
  shopName: "",
  collectionsLoading: false,
};

export enum ActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_SHOP_NAME = "SET_SHOP_NAME",
  SET_COLLECTIONS_LOADING = "SET_COLLECTIONS_LOADING",
  SET_ALL = "SET_ALL",
}

type Action =
  | {
      type: ActionTypes.SET_PRODUCTS;
      payload: Product[];
    }
  | {
      type: ActionTypes.SET_SHOP_NAME;
      payload: string;
    }
  | {
      type: ActionTypes.SET_COLLECTIONS_LOADING;
      payload: boolean;
    }
  | {
      type: ActionTypes.SET_ALL;
      payload: State;
    };

export const fetchProductsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SET_SHOP_NAME:
      return { ...state, shopName: action.payload };
    case ActionTypes.SET_COLLECTIONS_LOADING:
      return { ...state, collectionsLoading: action.payload };
    case ActionTypes.SET_ALL:
      return {
        ...state,
        ...action.payload,
      };
  }
};
