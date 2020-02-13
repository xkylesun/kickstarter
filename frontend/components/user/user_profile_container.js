import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        createdProject: state.entities.projects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
