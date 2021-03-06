import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROJECT, RECEIVE_PROJECTS, APPEND_PROJECTS } from "../actions/project_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            let newState = Object.assign({}, newState, action.payload.creators)
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.creator);
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, action.payload.creators);
            // return action.payload.creators || {};
        case APPEND_PROJECTS:
            return Object.assign({}, state, action.payload.creators);
        default:
            return state;
    }
};