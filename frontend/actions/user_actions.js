import * as UserUtil from "../utils/user_util"
import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = payload => {
    return {
        type: RECEIVE_USER,
        payload
    };
};

export const fetchUser = userId => dispatch => {
    return UserUtil.fetchUser(userId)
        .then(
            payload => dispatch(receiveUser(payload)),
        )
};

export const fetchCurrentUser = userId => dispatch => (
    UserUtil.fetchUser(userId)
        .then(
            user => dispatch(receiveCurrentUser(user)),
        )
)

export const updateUser = ({formData, userId}) => dispatch => (
    UserUtil.updateUser(formData, userId)
        .then(
            user => {
                dispatch(receiveCurrentUser(user));
                dispatch(receiveUser({user}))
            }
        )
)