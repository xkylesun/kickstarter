
import { RECEIVE_PLEDGE, REMOVE_PLEDGE } from "../actions/pledge_actions";

export const pledgesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLEDGE:
            return action.pledge;
        case REMOVE_PLEDGE:
            return {};
        default:
            return state;
    };
};