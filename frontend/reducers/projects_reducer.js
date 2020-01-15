import { 
    RECEIVE_PROJECTS, 
    RECEIVE_PROJECT,
    REMOVE_PROJECT  } from "../actions/project_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export const projectsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.payload.projects;
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.projects)
        case REMOVE_PROJECT:
            let newState = Object.assign({}, state);
            delete newState(action.projectId);
            return newState;
        // case RECEIVE_CURRENT_USER: 
        //     return Object.assign({}, state, action.payload.projects)
        case RECEIVE_USER:
            return Object.assign({}, state, action.payload.backedProjects)
        default: 
            return state;
    };
};