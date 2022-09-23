import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../actions/session_actions";

const _nullUser = {
    currentUserId: null
};

const sessionReducer = (state=_nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //For some reason, when a cart doesnt exist for a 
            // current user, eg: just registered user,
            // rails only sends the user info unnested.

            return ( action.user.cartItems === undefined ) ? (
                { currentUserId: action.user.id }
            ) : (
                { currentUserId: action.user.userInfo.id }
            );

        case REMOVE_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    };
};

export default sessionReducer;