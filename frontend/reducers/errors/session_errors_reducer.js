import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";



const sessionErrorReducer = (state={}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_SESSION_ERRORS:
            return {};
        default:
            return state;
    }
};

export default sessionErrorReducer;