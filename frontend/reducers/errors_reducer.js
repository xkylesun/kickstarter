import { combineReducers } from 'redux';
import { sessionErrorsReducer } from "./session_errors_reducer";
import { projectErrorsReducer } from "./project_errors_reducer";
import { pledgeErrorsReducer } from "./pledge_errors_reducer";

export const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    project: projectErrorsReducer,
    pledge: pledgeErrorsReducer
});