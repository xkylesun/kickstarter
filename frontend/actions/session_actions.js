import * as SessionUtil from "../utils/session_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const signup = formUser => dispatch => SessionUtil.signup(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)), 
        errors => dispatch(receiveErrors(errors))
        );

export const login = formUser => dispatch => SessionUtil.login(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
        );

export const update = formUser => dispatch => SessionUtil.update(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    );

export const logout = () => dispatch => SessionUtil.logout()
    .then(
        () => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors))
        );