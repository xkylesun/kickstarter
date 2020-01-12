export const createPledgeLevel = pledgeLevel => (
    $.ajax({
        method: 'post',
        url: `api/pledge_levels`,
        data: { pledgeLevel },
    })
);