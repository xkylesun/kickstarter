export const createReward = reward => (
    $.ajax({
        method: 'post',
        url: `api/rewards`,
        data: { reward },
    })
);