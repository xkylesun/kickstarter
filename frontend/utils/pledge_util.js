export const createPledge = pledge => (
    $.ajax({
        method: 'post',
        url: `api/pledges`,
        data: { pledge },
    })
);

export const updatePledge = id => (
    $.ajax({
        method: 'patch',
        url: `api/pledges/${id}`,
    })
);

export const fetchPledge = id => (
    $.ajax({
        method: 'get',
        url: `api/pledges/${id}`,
    })
);