
import { connect } from 'react-redux';
import CreatedProjects from './created_projects';
import { fetchUser } from "../../actions/user_actions";
import { selectProjects } from "../../reducers/selector";
import { deleteProject } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
    let currentUser = state.session.currentUser;
    let createdProjects = [];
    if (state.entities.users[currentUser.id]){
        // console.log(state.entities.users[currentUser.id].createdProjectIds)
        createdProjects = selectProjects(state, state.entities.users[currentUser.id].createdProjectIds)
            .filter(res => res !== undefined).sort((a, b) => b.id - a.id)
    }

    return {
        currentUser: currentUser,
        createdProjects: createdProjects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        deleteProject: projectId => dispatch(deleteProject(projectId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatedProjects);
