export const createPledge = pledge => (
    $.ajax({
        method: 'post',
        url: `api/pledges/`,
        data: { pledge },
    })
);