import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCurrentUser } from "../../actions/user_actions";
import Navbar from './navbar';

const mapStateToProps = (props) => {
    return {
        currentUser: props.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
