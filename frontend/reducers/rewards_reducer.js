import { RECEIVE_PROJECT, RECEIVE_PROJECT_DRAFT } from "../actions/project_actions";
import { RECEIVE_REWARDS } from "../actions/reward_actions";


export const rewardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.rewards);
        case RECEIVE_REWARDS:
            return action.payload.rewards || {};
        case RECEIVE_PROJECT_DRAFT:
            return action.payload.rewards || {};
        default:
            return state;
    };
};