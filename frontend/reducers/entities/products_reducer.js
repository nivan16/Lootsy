import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from '../../actions/product_actions';
import { RECEIVE_CART, RECEIVE_CART_ITEM } from '../../actions/cart_actions';
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const productsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;

        case RECEIVE_PRODUCT:
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, {[action.product.id]: action.product} ); //is this better?

        case RECEIVE_CART:
            return Object.assign({}, state, action.cart.products)

        case RECEIVE_CURRENT_USER:
            return action.user.products ? action.user.products : null;

        case REMOVE_PRODUCT:
            newState = Object.assign({}, state);
            delete newState[action.productId];
            return newState;

        default:
            return state;
    }
};


export default productsReducer;