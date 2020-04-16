import * as PledgeUtil from "../utils/pledge_util";

export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";
export const RECEIVE_PLEDGE_ERRORS = "RECEIVE_PLEDGE_ERRORS";
export const CLEAR_PLEDGE_ERRORS = "CLEAR_PLEDGE_ERRORS";
export const RECEIVE_PAYMENT = "RECEIVE_PAYMENT";

const receivePledge = pledge => {
    return {
        type: RECEIVE_PLEDGE,
        pledge
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_PLEDGE_ERRORS,
        errors
    }
};

const receivePayment = payload => {
    return {
        type: RECEIVE_PAYMENT,
        payload
    }
}

export const createPledge = pledge => dispatch => {
    return PledgeUtil.createPledge(pledge).then(
            pledge => dispatch(receivePledge(pledge)),
            errors => dispatch(receiveErrors(errors))
        )
};

export const payPledge = id => dispatch => {
    return PledgeUtil.payPledge(id).then(
        (payload) => dispatch(receivePayment(payload)),
        errors => dispatch(receiveErrors(errors))
    )
};

export const fetchPledge = id => dispatch => {
    return PledgeUtil.fetchPledge(id).then(
        pledge => dispatch(receivePledge(pledge)),
        errors => dispatch(receiveErrors(errors))
    )
};

export const updatePledge = pledge => dispatch => (
    PledgeUtil.updatePledge(pledge).then(
        pledge => dispatch(receivePledge(pledge)),
        errors => dispatch(receiveErrors(errors))
    )
);
