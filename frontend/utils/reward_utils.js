export const createReward = reward => (
    $.ajax({
        method: "post",
        url: "api/rewards",
        data: { reward },
    })
);

// export const fetchReward = id => (
//     $.ajax({
//         method: "get",
//         url: `api/rewards/${id}`,
//     })
// )