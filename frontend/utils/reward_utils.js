export const createReward = reward => {
    return $.ajax({
        method: "post",
        url: "api/rewards",
        data: { reward },
    })
};

export const deleteReward = rewardId => {
    return $.ajax({
        method: "delete",
        url: `api/rewards/${rewardId}`
    })
}

// export const fetchReward = id => (
//     $.ajax({
//         method: "get",
//         url: `api/rewards/${id}`,
//     })
// )