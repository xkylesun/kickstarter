
import { connect } from 'react-redux';
import Discover from "./discover";
import { fetchProjects, fetchMoreProjects } from "../../actions/project_actions";
import { sortByDateAsc } from "../../utils/other_utils";

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects).sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    return {
        projects: projects,
        users: state.entities.users,
        filterType: ownProps.match.params.filterType.replace("&", "_"),
        searchTerm: ownProps.match.params.searchTerm.replace("%20", " "),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: (filters) => dispatch(fetchProjects(filters)),
        fetchMoreProjects: (filters) => dispatch(fetchMoreProjects(filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
