import * as RewardUtil from "../utils/reward_utils"

export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";

const receiveReward = reward => {
    return {
        type: RECEIVE_REWARD,
        reward
    };
};

const receiveRewardErrors = errors => {
    return {
        type: RECEIVE_REWARD_ERRORS,
        errors
    }
};


export const createReward = reward => dispatch => (
    RewardUtil.createReward(reward).then(
        pledge => dispatch(receiveReward(pledge)),
        errors => dispatch(receiveRewardErrors(errors))
    )
);
