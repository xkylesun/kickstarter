import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT, APPEND_PROJECTS  } from "../actions/project_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_REWARD } from "../actions/reward_actions"

export const projectsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.payload.projects || {};
        case APPEND_PROJECTS:
            newState = Object.assign({}, state, action.payload.projects) || {};
            // newState.lastPage = action.payload.lastPage;
            return newState;
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.projects)
        case REMOVE_PROJECT:
            newState = Object.assign({}, state);
            delete newState(action.projectId);
            return newState;
        case RECEIVE_REWARD:
            return action.payload.projects
        // case RECEIVE_CURRENT_USER: 
        //     return Object.assign({}, state, action.payload.projects)
        case RECEIVE_USER:
            return Object.assign({}, state, action.payload.backedProjects)
        default: 
            return state;
    };
};