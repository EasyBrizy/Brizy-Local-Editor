import axios from "axios";
import { ID } from "../../../../helpers";
import { Collection, CollectionsQueryResponse } from "./_models";

const API_URL = `/api`;
const GET_COLLECTIONS_URL = `${API_URL}/items`;

const getCollections = async (query: string): Promise<CollectionsQueryResponse> => {
  const reg = await axios.get(`${GET_COLLECTIONS_URL}?${query}`);
  return reg.data;
};

const createCollection = async (collection: Collection): Promise<Collection> => {
  return await axios.post(`${GET_COLLECTIONS_URL}`, {
    title: collection.title,
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
