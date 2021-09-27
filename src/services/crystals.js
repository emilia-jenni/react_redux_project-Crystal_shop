import axios from "axios";

const baseURL = "http://localhost:3001";

export const getCrystals = async () => {
  const response = await axios.get(baseURL + "/crystals");
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(baseURL + "/cart");
  return response.data;
};
