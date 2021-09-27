import * as actionTypes from "./actions";

const crystalReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_CRYSTAL:
      return action.payload;
    default:
      return state;
  }
};

export default crystalReducer;
