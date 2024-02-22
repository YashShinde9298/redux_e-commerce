import { combineReducers } from "redux";
import { cartReducer, productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer
})