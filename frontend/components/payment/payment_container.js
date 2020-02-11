import Payment from "./payment";
import { connect } from "react-redux";
import { updatePledge, fetchPledge } from "../../actions/pledge_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUser.id,
        pledge: state.entities.pledges
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePledge: (id) => dispatch(updatePledge(id)),
        fetchPledge: id => dispatch(fetchPledge(id))
    };
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default ProjectContainer;