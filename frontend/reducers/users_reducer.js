import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            var newState = Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
            newState = Object.assign({}, newState, action.payload.creators)
            return newState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.creator);
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, action.payload.creators);
        default:
            return state;
    }
};