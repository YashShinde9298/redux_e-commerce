import { combineReducers } from "redux";
import { cartReducer, productReducer, selectedProductReducer, sliderReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
    slider: sliderReducer
})