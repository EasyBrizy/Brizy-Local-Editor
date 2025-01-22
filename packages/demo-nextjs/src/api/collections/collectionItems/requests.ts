import axios from "axios";

interface Response {
  products: { title: string; id: string }[];
}

export const searchProductsByTitle = async (title: string) => {
  const query = `title:${title}`;
  const { data } = await axios.get<Response>(`/api/products?search=${query}`);

  return data.products.map(({ title, id }) => ({ title, value: id }));
};

export const getProductsByIds = async (ids: string[]) => {
  const { data } = await axios.get<Response>(`/api/products/byIds?productIds=${ids}`);

  return data.products.map(({ title, id }) => ({ title, value: id }));
};
