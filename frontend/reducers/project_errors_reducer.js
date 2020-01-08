import { RECEIVE_PROJECT_ERRORS } from "../actions/project_actions"

export const projectErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:
            // action.errors is an array
            return action.errors;
        default:
            return state;
    }
}