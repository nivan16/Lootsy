import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";


const sessionErrorReducer = (state={}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            let newState = {
                email: null,
                name: null,
                password: null
            };
            if(!(action.errors.responseJSON instanceof Array)) return action.errors.responseJSON;

            if(action.errors.responseJSON[0][0] === "E"){
                newState.email = action.errors.responseJSON[0]
            }
            else if(action.errors.responseJSON[0][0] === "N"){
                newState.name = action.errors.responseJSON[0]
            }
            else{
                newState.password = action.errors.responseJSON[0]
            }
            
            return newState;
        case CLEAR_SESSION_ERRORS:
        case RECEIVE_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default sessionErrorReducer;