import React from "react";

import RewardForm from "./reward_form";
import RewardItem from "./reward_item";

export default class RewardSection extends React.Component {
    constructor(props) {
        super(props);
    }

    showForm() {
        document.getElementById("reward-form").classList.remove("hidden");
    }

    hideForm() {
        document.getElementById("reward-form").classList.add("hidden");
    }

    render() {
        return (
            <div className="hidden" id="project-rewards">
                <div className="form-top-frame">
                    <div className="form-header">
                        <div className="form-header-container"
                        >
                            <h1 className="reward-header-title">Add your rewards</h1>
                            <h2 className="form-desc-body">Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>
                        </div>
                    </div>
                </div>

                <div className="form-top-frame">
                    <div className="reward-sub-header">
                        <div className="reward-sub-frame">
                            <div>
                                <h1 className="form-header-title">Rewards</h1>
                                <h2 className="form-desc-body">It's good to provide a range of prices but not too many options.</h2>
                            </div>
                            <div className="show-form-btn-container">
                                <button className="btn btn-black" onClick={this.showForm}>+ Add a reward</button>
                            </div>
                        </div>
                        <div className="reward-item-display">
                            <ul>
                                {this.props.rewards.map((reward) => {
                                    return (
                                        <li key={reward.id}>
                                            <RewardItem 
                                                reward={reward} 
                                                removeReward={this.props.removeReward} />
                                            </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <RewardForm 
                        addReward={this.props.addReward} 
                        hideForm={this.hideForm}
                        projectId={this.props.projectId}/>
                </div>

                <div className="bottom-bar">
                    <button className="next-button btn-dark-green" type="button" onClick={this.props.handleClick("project-rewards", "project-story")}>Next: Story <i className="fa fa-angle-right"></i></button>
                    <button className="back-button" type="button" onClick={this.props.handleClick("project-rewards", "project-basics")}><i className="fa fa-angle-left"></i> Back to Basics</button>
                </div>
                <div className="line-separator"></div>
            </div>
        )
    }
}