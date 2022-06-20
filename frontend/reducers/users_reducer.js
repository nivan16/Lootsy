import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState;
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            newState = Object.assign({}, state);
            newState[action.user.id] = action.user;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            delete newState[action.userId];
            return newState;
        default:
            return state;
    }
};

export default usersReducer;