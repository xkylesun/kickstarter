
import { connect } from 'react-redux';
import CatchAll from "./catch_all";
import { fetchProject } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProject: () => dispatch(fetchProject("_random"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatchAll);
