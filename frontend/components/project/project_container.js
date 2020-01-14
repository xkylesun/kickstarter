;
import { connect } from "react-redux";
import { fetchProject  } from "../../actions/project_actions";
import { selectPledgeLevels } from "../../reducers/selector"
import Project from "./project";

const mapStateToProps = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.projectId]
    var creator;
    if (project) {
        creator = state.entities.users[project.creatorId]
    }
    return {
        id: ownProps.match.params.projectId,
        project: project,
        creator: creator,
        pledgeLevels: selectPledgeLevels(state, project)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProject: (id) => dispatch(fetchProject(id))
    };
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);

export default ProjectContainer;