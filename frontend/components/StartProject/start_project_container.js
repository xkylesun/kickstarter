import { connect } from 'react-redux';

import BeforeCreateProjectForm from './before_create_project_form';

const mapStateToProps = (props) => {
    return {
        currentUserId: props.session.currentUserId
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BeforeCreateProjectForm);
