import { connect } from 'react-redux';

import UserProfile from './user_profile';

const mapStateToProps = (props) => {
    return {
        currentUser: props.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
    // requestProjects: dispatch(requestProjects)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
