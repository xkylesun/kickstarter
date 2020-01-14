import { connect } from 'react-redux';

import StartForm from './start_form';
import { createProject } from "../../actions/project_actions";
import { createPledgeLevel } from "../../actions/pledge_level_actions"
 
const mapStateToProps = (props) => {
    return {
        currentUserId: props.session.currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createProject: formData => dispatch(createProject(formData))
        // createPledgeLevel: pledgeLevel => dispatch(createPledgeLevel(pledgeLevel))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);
