import * as UserApiUtil from '../utils/user_utils';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const removeUser = userId => ({
    type: REMOVE_USER,
    userId
});

export const requestUsers = () => dispatch => {
    UserApiUtil.fetchUsers()
        .then( users => dispatch(receiveUsers(users)) )
};

export const requestUser = userId => dispatch => {
    UserApiUtil.fetchUser(userId)
        .then( user => dispatch(receiveUser(user)) )
};

export const deleteUser = userId => dispatch => {
    UserApiUtil.deleteUser(userId)
        .then( () => dispatch(removeUser(userId)))
};