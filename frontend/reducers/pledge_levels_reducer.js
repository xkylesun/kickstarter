import {
    RECEIVE_PROJECT,
} from "../actions/project_actions";
import { RECEIVE_PLEDGE } from "../actions/pledge_level_actions";

export const pledgeLevelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.pledgeLevels);
        case RECEIVE_PLEDGE:
            return state;
        default:
            return state;
    };
};