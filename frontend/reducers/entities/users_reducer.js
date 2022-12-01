import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from "../../actions/user_actions";
import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../../actions/product_actions';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_CART, RECEIVE_CART_ITEM } from '../../actions/cart_actions';
import { $CombinedState } from "redux";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;
    switch (action.type) {

        case RECEIVE_USER:
            newState = Object.assign({}, state);
            newState[action.user.id] = action.user;
            return newState;

        case REMOVE_USER:
            newState = Object.assign({}, state);
            delete newState[action.userId];
            return newState;

        case RECEIVE_CURRENT_USER:      
            //For some reason, when a cart doesnt exist for a 
            // current user, eg: just registered user,
            // rails only sends the user info unnested.
            //This will either just assign the shallow user
            // object into the user state, or the nested
            // userInfo into the current state in addition to
            // the cart product owners.
            return ( action.user.cartItems === undefined ) ? ( 
                Object.assign({}, state, {[action.user.id]: action.user} )
            ) : (
                Object.assign({}, state, action.user.users, {[action.user.userInfo.id]: action.user.userInfo})
            );
                    
        case REMOVE_CURRENT_USER:
            newState = Object.assign({}, state);
            delete newState[action.currentUserId];
            return newState;

        case RECEIVE_PRODUCT:
            return Object.assign({}, state, action.productInfo.user);

        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, action.productInfo.users)

        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, action.newCartItem.user);

        case RECEIVE_CART: //receive product owners
            return Object.assign({}, state, action.cart.users);
        
        default:
            return state;
        }
    };

export default usersReducer;