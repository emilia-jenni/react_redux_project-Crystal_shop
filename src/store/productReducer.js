import * as actionTypes from "./actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_CRYSTAL:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
