import { RECEIVE_PLEDGE_ERRORS, CLEAR_PLEDGE_ERRORS } from "../actions/pledge_actions"

export const pledgeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLEDGE_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_PLEDGE_ERRORS:
            return [];
        default:
            return state;
    }
}