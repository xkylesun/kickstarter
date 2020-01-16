
import { connect } from 'react-redux';
import Discover from "./discover";
import { fetchProjects } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects)
    return {
        projects: projects,
        users: state.entities.users,
        filterType: ownProps.match.params.filterType.replace("&", "_"),
        searchTerm: ownProps.match.params.searchTerm.replace("%20", " ")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: (filter) => dispatch(fetchProjects(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
