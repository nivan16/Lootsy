import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from "../../actions/user_actions";
import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from '../../actions/product_actions';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";

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
                
        case RECEIVE_PRODUCT:
            //This is productInfo.users* due to potential reviewers of a product
            return Object.assign({}, state, action.productInfo.users);

        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, action.productInfo.users);

        default:
            return state;
    }
};

// ***Prior cases from non-independent Cart State
// import { RECEIVE_CART, RECEIVE_CART_ITEM } from '../../actions/cart_actions';

// case RECEIVE_CART_ITEM:
//         return Object.assign({}, state, action.newCartItem.user);

// case RECEIVE_CART: //receive product owners
//     return Object.assign({}, state, action.cart.users);


// ***Prior to currentUser data being stored entirely in Session Slice of State
// case RECEIVE_CURRENT_USER:      
//     //For some reason, when a cart doesnt exist for a 
//     // current user, eg: just registered user,
//     // rails only sends the user info unnested.
//     //This will either just assign the shallow user
//     // object into the user state, or the nested
//     // userInfo into the current state in addition to
//     // the cart product owners.
//     return ( action.currentUser.cartItems === undefined ) ? ( 
//         Object.assign({}, state, {[action.currentUser.id]: action.currentUser} )
//     ) : (
//         Object.assign({}, state, {[action.currentUser.userInfo.id]: action.currentUser.userInfo})
//     );
            
// case REMOVE_CURRENT_USER:
//     newState = Object.assign({}, state);
//     delete newState[action.currentUserId];
//     return newState;


export default usersReducer;