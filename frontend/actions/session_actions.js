import * as SessionUtil from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const signupCurrentUser = user => dispatch => (
    SessionUtil.signup(user)
        .then( 
            currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => dispatch(receiveSessionErrors(err))
        )
);
export const loginCurrentUser = user => dispatch => (
    SessionUtil.login(user)
        .then( 
            currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => dispatch(receiveSessionErrors(err))
        )
);

export const logoutCurrentUser = currentUserId => dispatch => (
    SessionUtil.logout()
        .then( 
            () => dispatch(removeCurrentUser(currentUserId)),
            err => dispatch(receiveSessionErrors(err))    
        )
)