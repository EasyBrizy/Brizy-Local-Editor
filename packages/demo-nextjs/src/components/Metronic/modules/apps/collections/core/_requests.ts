import axios from "axios";
import { ID } from "../../../../helpers";
import { CollectionsQueryResponse } from "./_models";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
const GET_COLLECTIONS_URL = `${API_URL}/items`;

const getCollections = async (query: string): Promise<CollectionsQueryResponse> => {
  const d = await axios.get(`${GET_COLLECTIONS_URL}?${query}`);
  return d.data;
};

const deleteUser = (userId: ID): Promise<void> => {
  return Promise.reject("Not Implemented");
};

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  return Promise.reject("Not Implemented");
};

export { getCollections, deleteUser, deleteSelectedUsers };
