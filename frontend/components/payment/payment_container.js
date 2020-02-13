import Payment from "./payment";
import { connect } from "react-redux";
import { payPledge, fetchPledge } from "../../actions/pledge_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUser.id,
        pledge: state.entities.pledges
    }
}

const mapDispatchToProps = dispatch => {
    return {
        payPledge: (id) => dispatch(payPledge(id)),
        fetchPledge: id => dispatch(fetchPledge(id))
    };
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default ProjectContainer;