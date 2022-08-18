import { RECEIVE_CART, RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../../actions/cart_actions';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";

const cartReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;
    switch (action.type) {
        case RECEIVE_CART:
            return action.cart.cartItems;

        case RECEIVE_CURRENT_USER:
            debugger;
            return action.user.cartItems ? action.user.cartItems : {};

        case RECEIVE_CART_ITEM:
            newState = Object.assign({}, state, action.cartItem);
            return newState;

        case REMOVE_CART_ITEM:
            newState = Object.assign({}, state);
            delete newState[action.productId];
            return newState;

        case REMOVE_CURRENT_USER:
            return {};

        default:
            return state;
    }


}
export default cartReducer;