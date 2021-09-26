import axios from "axios";

const baseURL = "http://localhost:3001";

export const getProducts = async () => {
  const response = await axios.get(baseURL + "/products");
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(baseURL + "/cart");
  return response.data;
};
