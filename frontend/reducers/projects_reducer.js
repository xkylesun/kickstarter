import { RECEIVE_PROJECTS, RECEIVE_PROJECT, RECEIVE_PROJECT_DRAFT, REMOVE_PROJECT, APPEND_PROJECTS, RECEIVE_BACKED_PROJECT } from "../actions/project_actions";
import { RECEIVE_REWARDS } from "../actions/reward_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export const projectsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.payload.projects || {};
        case APPEND_PROJECTS:
            return Object.assign({}, state, action.payload.projects) || {};
        case RECEIVE_PROJECT:
            let id = Object.keys(action.payload.project);
            newState[id] = action.payload.project[id];
            return newState;
        case RECEIVE_PROJECT_DRAFT:
            let draftId = action.payload.project.id
            newState[draftId] = action.payload.project;
            return newState;
        case REMOVE_PROJECT:
            delete newState[action.payload.projectId];
            return newState;
        // case RECEIVE_REWARDS:
        //     return action.payload.projects;
        case RECEIVE_USER:
            newState = Object.assign({}, newState, action.payload.backedProjects);
            newState = Object.assign({}, newState, action.payload.createdProjects);
            return newState;
        default: 
            return state;
    };
};