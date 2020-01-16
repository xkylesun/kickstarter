import Payment from "./payment";
import { connect } from "react-redux";
import { createPledge } from "../../actions/pledge_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.currentUser.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPledge: (pledge) => dispatch(createPledge(pledge))
    };
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default ProjectContainer;