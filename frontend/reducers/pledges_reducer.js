
import { RECEIVE_PLEDGE, RECEIVE_PAYMENT } from "../actions/pledge_actions";

export const pledgesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLEDGE:
            return action.pledge;
        case RECEIVE_PAYMENT:
            return {};
        default:
            return state;
    };
};