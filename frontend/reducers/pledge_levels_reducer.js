import {
    RECEIVE_PROJECT,
} from "../actions/project_actions";

export const pledgeLevelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.pledgeLevels)
        default:
            return state;
    };
};