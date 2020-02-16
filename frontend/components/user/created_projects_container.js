
import { connect } from 'react-redux';
import CreatedProjects from './created_projects';
import { fetchUser } from "../../actions/user_actions";
import { selectProjects } from "../../reducers/selector";
import { deleteProject } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
    let currentUser = state.session.currentUser;
    return {
        currentUser: currentUser,
        createdProjects: selectProjects(state, currentUser.createdProjectIds).filter(res => res !== undefined)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        deleteProject: projectId => dispatch(deleteProject(projectId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedProjects);
