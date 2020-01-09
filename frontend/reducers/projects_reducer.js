import { 
    RECEIVE_PROJECTS, 
    RECEIVE_PROJECT,
    REMOVE_PROJECT  } from "../actions/project_actions";

export const projectsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, action.payload)
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload)
        case REMOVE_PROJECT:
            let newState = Object.assign({}, state)
            delete newState(action.projectId)
            return newState
        default: 
            return state;
    };
};