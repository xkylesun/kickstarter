import { combineReducers } from 'redux';
import { usersReducer } from "./users_reducer";
import { projectsReducer } from "./projects_reducer";

export const entitiesReducer =  combineReducers({
    users: usersReducer,
    projects: projectsReducer
});
