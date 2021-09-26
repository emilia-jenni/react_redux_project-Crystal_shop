import { getProducts } from "../services/products";

export const INIT_CRYSTAL = "INIT_CRYSTAL";
export const INIT_CART = "INIT_CART";
export const ADD_CRYSTAL = "ADD_CRYSTAL";
export const REMOVE_CRYSTAL = "REMOVE_PRODUCT";

export const initializeState = () => {
  return async (dispatch) => {
    const products = await getProducts();
    dispatch({
      type: INIT_CRYSTAL,
      payload: products,
    });
  };
};

export const addCrystal = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CRYSTAL,
      payload: product,
    });
  };
};

export const removeCrystal = (productID) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CRYSTAL,
      payload: productID,
    });
  };
};
