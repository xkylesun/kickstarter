import * as PledgeLevelUtil from "../utils/pledge_level_utils"

export const RECEIVE_PLEDGE_LEVEL = "RECEIVE_PLEDGE_LEVEL";
export const RECEIVE_PLEDGE_LEVEL_ERRORS = "RECEIVE_PLEDGE_LEVEL_ERRORS";

const receivePledge = pledgeLevel => {
    return {
        type: RECEIVE_PLEDGE_LEVEL,
        pledgeLevel
    };
};

const receivePledgeLevelErrors = errors => {
    return {
        type: RECEIVE_PLEDGE_LEVEL_ERRORS,
        errors
    }
};


export const createPledgeLevel = pledgeLevel => dispatch => (
    PledgeLevelUtil.createPledgeLevel(pledgeLevel).then(
        pledge => dispatch(receivePledge(pledge)),
        errors => dispatch(receivePledgeLevelErrors(errors))
    )
);
