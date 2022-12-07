import { RECEIVE_CART, RECEIVE_CART_ITEM, REMOVE_CART, REMOVE_CART_ITEM } from '../../actions/cart_actions';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";

const cartReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;
    switch (action.type) {
        case RECEIVE_CART: //updated
            return action.cart;

        case RECEIVE_CART_ITEM: //updated
            newState = Object.assign({}, state, action.newCartItem);
            return newState;

        // REMOVE_CART exists to protext against potential error on
        //   removal of last item in cart
        // **Should seek advice on this case
        case REMOVE_CART:
        case REMOVE_CURRENT_USER:
            return {};

        case REMOVE_CART_ITEM:
            newState = Object.assign({}, state);
            delete newState[action.productId];
            return newState;

        case RECEIVE_CURRENT_USER:
            return action.currentUser.cartItems ? action.currentUser.cartItems : {};
        
        default:
            return state;
    }


}
export default cartReducer;