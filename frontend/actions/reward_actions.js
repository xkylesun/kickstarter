import * as RewardUtil from "../utils/reward_utils"

export const RECEIVE_REWARDS = "RECEIVE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";

const receiveRewards = payload => {
    return {
        type: RECEIVE_REWARDS,
        payload
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
        rewards => dispatch(receiveRewards(rewards)),
        errors => dispatch(receiveRewardErrors(errors))
    )
);

export const removeReward = rewardId => dispatch => (
    RewardUtil.deleteReward(rewardId).then(
        rewards => dispatch(receiveRewards(rewards)),
        errors => dispatch(receiveRewardErrors(errors))
    )
);


