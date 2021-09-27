import { getCrystals } from "../services/crystals";

export const INIT_CRYSTAL = "INIT_CRYSTAL";
export const INIT_CART = "INIT_CART";
export const ADD_CRYSTAL = "ADD_CRYSTAL";
export const REMOVE_CRYSTAL = "REMOVE_PRODUCT";

export const initializeState = () => {
  return async (dispatch) => {
    const crystals = await getCrystals();
    dispatch({
      type: INIT_CRYSTAL,
      payload: crystals,
    });
  };
};

export const addCrystal = (crystal) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CRYSTAL,
      payload: crystal,
    });
  };
};

export const removeCrystal = (crystalID) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CRYSTAL,
      payload: crystalID,
    });
  };
};
