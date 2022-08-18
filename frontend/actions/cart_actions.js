import * as CartUtils from '../utils/cart_utils';

export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
});

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const removeCartItem = productId => ({
    type: REMOVE_CART_ITEM,
    productId
});

export const requestCart = shopperId => dispatch => (
    CartUtils.fetchCart(shopperId)
        .then( cartItems => dispatch(receiveCart(cartItems)))
);

export const updateCartItem = (shopperId, productId, quantity) => dispatch => (
    CartUtils.updateCartItem(shopperId, productId, quantity)
        .then( cartItem => dispatch(receiveCartItem(cartItem)))
);

export const deleteCartItem = (shopperId, productId) => dispatch =>(
    CartUtils.deleteCartItem(shopperId, productId)
        .then( () => dispatch(removeCartItem(productId)))
);