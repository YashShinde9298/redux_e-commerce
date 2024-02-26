import { ActionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}


export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: product
    }
}

export const deleteFromCart = (product) => {
    return {
        type: ActionTypes.DELETE_FROM_CART,
        payload: product
    }
}

export const placeOrder = (orderData) => {
    return {
        type: ActionTypes.PLACE_ORDER,
        payload: orderData
    }
}

export const nextSlide = (payload) => {
    return {
        type: ActionTypes.NEXT_SLIDE,
        payload
    }
}

export const prevSlide = (payload) => {
    return {
        type: ActionTypes.PREV_SLIDE,
        payload
    }
}
