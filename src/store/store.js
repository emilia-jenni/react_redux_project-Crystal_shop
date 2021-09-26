import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
