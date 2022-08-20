import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_CART, RECEIVE_CART_ITEM } from '../../actions/cart_actions';

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
            action.user.users ? ( 
                newState = Object.assign({}, state, action.user.users)
            ) : (
                    newState = Object.assign({}, state) 
            );
            newState[action.user.userInfo.id] = action.user.userInfo;
            return newState;
                    
            case REMOVE_CURRENT_USER:
                newState = Object.assign({}, state);
                delete newState[action.currentUserId];
                return newState;

            case RECEIVE_CART_ITEM:
                return Object.assign({}, state, action.cartItem.user);
    
            case RECEIVE_CART: //receive product owners
                return Object.assign({}, state, action.cart.users);
            
            default:
                return state;
            }
        };

export default usersReducer;