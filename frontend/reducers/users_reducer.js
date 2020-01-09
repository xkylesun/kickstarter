import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.creator);
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, action.payload.creators)
        default:
            return state;
    }
};