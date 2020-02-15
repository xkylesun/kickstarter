import { connect } from 'react-redux';

import EditForm from './edit_form';
import { fetchProjectDraft, updateProject } from "../../actions/project_actions";
import { createReward, removeReward } from "../../actions/reward_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        draft: state.entities.projects[ownProps.match.params.projectId],
        rewards: Object.values(state.entities.rewards)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjectDraft: id => dispatch(fetchProjectDraft(id)),
        updateProject: formData => dispatch(updateProject(formData)),
        createReward: reward => dispatch(createReward(reward)),
        removeReward: rewardId => dispatch(removeReward(rewardId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
