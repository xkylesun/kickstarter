import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from "../../actions/user_actions";
import { selectProjects, selectUser } from "../../reducers/selector";

const mapStateToProps = (state, ownProps) => {
    let currentUser = state.session.currentUser;
    let targetId = ownProps.match.params.userId ? ownProps.match.params.userId : currentUser.id;

    let targetUser = selectUser(state, targetId);
    let backedProjects = selectProjects(state, targetUser.backedProjectIds);
    // let creators = backedProjects.map(project => {
    //     return selectUser(state, project.creatorId);
    // })

    return {
        currentUser: currentUser,
        targetId: parseInt(targetId),
        targetUser: targetUser,
        backedProjects: backedProjects,
        creators: state.entities.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
