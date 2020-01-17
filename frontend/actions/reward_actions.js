import * as RewardUtil from "../utils/reward_utils"

export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";

const receiveReward = payload => {
    return {
        type: RECEIVE_REWARD,
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
        pledge => dispatch(receiveReward(pledge)),
        errors => dispatch(receiveRewardErrors(errors))
    )
);

// export const fetchReward = id => dispatch => (
//     RewardUtil.fetchReward(id).then(
//         reward => dispatch(receiveReward(reward)),
//         errors => dispatch(receiveRewardErrors(errors))
//     )
// )
