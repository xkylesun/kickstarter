
import { connect } from 'react-redux';
import Home from "./home";
import { fetchProjects } from "../../actions/project_actions"

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects)
    const featured = projects.shift();

    return {
        featured: featured,
        recommended: projects,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: (filter) => dispatch(fetchProjects(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
