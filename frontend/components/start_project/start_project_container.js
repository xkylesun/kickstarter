import { connect } from 'react-redux';

import StartForm from './start_form';
import { createProject } from "../../actions/project_actions";
 
const mapStateToProps = (props) => {
    return {
        currentUser: props.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createProject: formData => dispatch(createProject(formData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);
