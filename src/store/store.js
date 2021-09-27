import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./cartReducer";
import crystalReducer from "./crystalReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  crystals: crystalReducer,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
