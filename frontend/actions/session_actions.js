import * as SessionUtil from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

export const signupCurrentUser = user => dispatch => (
    SessionUtil.signup(user)
        .then( currentUser => dispatch(receiveCurrentUser(currentUser)))
);
export const loginCurrentUser = user => dispatch => (
    SessionUtil.login(user)
        .then( currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logoutCurrentUser = () => dispatch => (
    SessionUtil.logout()
        .then( () => dispatch(removeCurrentUser()))
)