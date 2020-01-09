import * as UserUtil from "../utils/user_util"

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = payload => {
    return {
        type: RECEIVE_USER,
        payload
    };
};

export const fetchUser = userId => dispatch => (
    UserUtil.fetchUser(userId)
        .then(
            payload => dispatch(receiveUser(payload)),
        )
);
