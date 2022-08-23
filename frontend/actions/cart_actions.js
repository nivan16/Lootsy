import * as CartUtils from '../utils/cart_utils';

export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
});

const receiveCartItem = newCartItem => ({
    type: RECEIVE_CART_ITEM,
    newCartItem
});

const removeCartItem = productId => ({
    type: REMOVE_CART_ITEM,
    productId
});

export const requestCart = shopperId => dispatch => (
    CartUtils.fetchCart(shopperId)
        .then( cartItems => dispatch(receiveCart(cartItems)))
);

export const updateCartItem = cartItem => dispatch => (
    CartUtils.updateCartItem(cartItem)
        .then( newCartItem => dispatch(receiveCartItem(newCartItem)))
);

export const deleteCartItem = (shopperId, productId) => dispatch =>(
    CartUtils.deleteCartItem(shopperId, productId)
        .then( () => dispatch(removeCartItem(productId)),
        ( err=> console.log(err))
    )
);