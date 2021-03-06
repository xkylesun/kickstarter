import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PAYMENT } from "../actions/pledge_actions";
import { REMOVE_PROJECT } from "../actions/project_actions";

const _nullSession = {
    currentUser: null
};

export const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.payload });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_PAYMENT:
            newState.currentUser.backedProjectIds = action.payload.backedProjectIds;
            newState.currentUser.backedRewardIds = action.payload.backedRewardIds;
            return newState;
        case REMOVE_PROJECT:
            newState.currentUser.createdProjectIds = action.payload.createdProjectIds;
            return newState;
        default:
            return state;
    }
};