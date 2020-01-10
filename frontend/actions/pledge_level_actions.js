import * as PledgeUtil from "../utils/pledge_util";

export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";
export const RECEIVE_PLEDGE_ERRORS = "RECEIVE_PLEDGE_ERRORS";

const receivePledge = pledge => {
    return {
        type: RECEIVE_PLEDGE,
        pledge
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_PLEDGE_ERRORS,
        errors
    }
};

export const createPledge = pledge => dispatch => (
    PledgeUtil.createPledge(pledge).then(
        pledge => dispatch(receivePledge(pledge)),
        errors => dispatch(receiveErrors(errors))
    )
);
