import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT, APPEND_PROJECTS, RECEIVE_BACKED_PROJECT } from "../actions/project_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_REWARD } from "../actions/reward_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PAYMENT } from "../actions/pledge_actions";

export const projectsReducer = (state = {all: {}, backed: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PROJECTS:
            newState.all = action.payload.projects || {};
            return newState;
        case APPEND_PROJECTS:
            newState.all = Object.assign({}, newState.all, action.payload.projects) || {};
            return newState;
        case RECEIVE_PROJECT:
            newState.all = action.payload.projects;
            return newState;
        case REMOVE_PROJECT:
            delete newState.all[action.projectId];
            return newState;
        case RECEIVE_REWARD:
            return action.payload.projects
        case RECEIVE_CURRENT_USER:
            newState.backed = action.payload.backedProjects || {};
            return newState;
        // case RECEIVE_PAYMENT:
            // newState.backed[action.payload.projects.id] = action.payload.projects
            // return newState;
        default: 
            return state;
    };
};