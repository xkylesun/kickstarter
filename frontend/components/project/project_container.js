import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import { createPledge, CLEAR_PLEDGE_ERRORS } from "../../actions/pledge_actions";

import { selectRewards } from "../../reducers/selector"
import Project from "./project";

const mapStateToProps = (state, ownProps) => {
    const project = state.entities.projects.all[ownProps.match.params.projectId]    
    return {
        id: ownProps.match.params.projectId,
        project: project,
        creator: project ? state.entities.users[project.creatorId] : null,
        rewards: selectRewards(state, project),
        currentUser: state.session.currentUser,
        errors: state.errors.pledge || []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProject: (id) => dispatch(fetchProject(id)),
        createPledge: (pledge) => dispatch(createPledge(pledge)),
        clearErrors: () => dispatch({ type: CLEAR_PLEDGE_ERRORS })
    };
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);

export default ProjectContainer;