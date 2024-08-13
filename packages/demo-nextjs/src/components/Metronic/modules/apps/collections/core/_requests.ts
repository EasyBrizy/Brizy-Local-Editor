import { getConfig } from "@/config";
import axios from "axios";
import { ID } from "../../../../helpers";
import { Collection, CollectionsQueryResponse } from "./_models";

const API_URL = `${getConfig().host}/api`;
const GET_COLLECTIONS_URL = `${API_URL}/items`;

const getCollections = async (query: string): Promise<CollectionsQueryResponse> => {
  const reg = await axios.get(`${GET_COLLECTIONS_URL}?${query}`);
  return reg.data;
};

const createCollection = async (collectionType: string, reference?: string): Promise<Collection> => {
  const id = Math.random().toString(36).slice(2);

  const collection = {
    id,
    slug: {
      collection: collectionType,
      item: `${collectionType}-${id}`,
    },
    config: {
      deletable: true,
      hasPreview: true,
      ...(reference ? { reference } : {}),
    },
    data: undefined,
  };

  return await axios.post(`${GET_COLLECTIONS_URL}`, {
    slug: collection.slug,
    config: collection.config,
    pageData: collection.data,
  });
};

const deleteItem = async (id: ID): Promise<void> => {
  return await axios.delete(`${GET_COLLECTIONS_URL}`, {
    data: { ids: [id] },
  });
};

const deleteSelectedItems = async (ids: Array<ID>): Promise<void> => {
  return await axios.delete(`${GET_COLLECTIONS_URL}`, {
    data: { ids },
  });
};

export { getCollections, deleteItem, deleteSelectedItems, createCollection };
