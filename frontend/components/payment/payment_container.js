import Payment from "./payment";
import { connect } from "react-redux";
import { createPledge } from "../../actions/pledge_level_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPledge: (pledge) => dispatch(createPledge(pledge))
    };
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default ProjectContainer;