
import { connect } from 'react-redux';
import Home from "./home";
import { fetchProjects } from "../../actions/project_actions"

const mapStateToProps = (state, ownProps) => {

    let projects = Object.values(state.entities.projects).sort(function (a, b) { return 0.5 - Math.random() });
    let featured = projects.shift();

    return {
        featured: featured || {},
        recommended: projects || [],
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: (filter) => dispatch(fetchProjects(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
