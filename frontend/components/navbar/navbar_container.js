import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser || null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        // fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
