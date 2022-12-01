import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from '../../actions/product_actions';
import { RECEIVE_CART, RECEIVE_CART_ITEM } from '../../actions/cart_actions';
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const productsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            //if there are no products, return empty object *in the case of an empty search*
            if($.isEmptyObject(action.productInfo)) return {};
            return action.productInfo.products;

        case RECEIVE_PRODUCT:
            //if there is no product, return empty object *in the case of an empty search*
            if($.isEmptyObject(action.productInfo)) return {};
            return Object.assign({}, state, action.productInfo.product); //is this better?

        case RECEIVE_CART:
            return Object.assign({}, state, action.cart.products)

        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, {[action.newCartItem.product.id]: action.newCartItem.product})

        case REMOVE_PRODUCT:
            let newState = Object.assign({}, state);
            delete newState[action.productId];
            return newState;
            
        case RECEIVE_CURRENT_USER:
            return action.user.products ? (
                Object.assign({}, state, action.user.products) 
            ) : (
                Object.assign({}, state)
            );

        default:
            return state;
    }
};


export default productsReducer;