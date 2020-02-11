import React from "react";
import { withRouter } from "react-router";
import { toggleHide, toggleShow } from "../../utils/other_utils";

class Reward extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.reward.minimum,
            showForm: false,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hoverShow = this.hoverShow.bind(this);
        this.hoverHide = this.hoverHide.bind(this);
        this.clickShow = this.clickShow.bind(this);
    }


    handleInput(event) {
        this.setState({
            value: event.currentTarget.value
        });
    }

    handleSubmit() {
        if (!this.props.currentUser){
            this.props.history.push("/login")
        } else {
            this.props.createPledge({
                backer_id: this.props.currentUser.id,
                project_id: this.props.projectId,
                reward_id: this.props.reward.id,
                amount: parseInt(this.state.value)
            }).then(
                (payload) => {
                    console.dir(payload)
                    this.props.history.push(`/checkouts/${payload.pledge.id}/payments`)
                }
            )
        }
    }

    hoverShow(e) {
        if (!this.state.showForm) {
            // e.currentTarget.childNodes[0].classList.add("show")
            document.getElementById(`screen-${this.props.reward.id}`).classList.add("show")
        }
    }

    hoverHide(e) {
        if (!this.state.showForm) {
            // e.currentTarget.childNodes[0].classList.remove("show")
            document.getElementById(`screen-${this.props.reward.id}`).classList.remove("show")
        }
    }

    clickShow(e) {
        this.setState({ showForm: true });
        document.getElementById(`screen-${this.props.reward.id}`).classList.remove("show")
        document.getElementById(`screen-${this.props.reward.id}`).classList.add("clicked")
        e.currentTarget.parentNode.childNodes[3].classList.remove("hidden");
        // e.currentTarget.parentNode.childNodes[0].classList.add("hidden");
    }

    renderErrors() {
        if (this.props.errors.length === 0) return null;
        return (
            <section className="display-error">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </section>
        );
    }

    checkBackedProject(){
        if (this.props.currentUser){
            if (this.props.currentUser.backedProjectIds.includes(this.props.projectId)){
                return true;
            }
        }
        return false;
    }

    checkBackedReward(){
        if (this.props.currentUser) {
            if (this.props.currentUser.backedRewardIds.includes(this.props.reward.id)) {
                return true;
            }
        }
        return false;
    }

    render() {
        var limited;
        var estimatedDelivery;
        let backedProject = this.checkBackedProject();
        let backedReward = this.checkBackedReward();
        if (this.props.reward.quantity) {
            limited = <p className="reward-remaining">Limited ({this.props.reward.quantity - this.props.reward.count} of {this.props.reward.quantity})</p>
        }

        if (estimatedDelivery) {
            estimatedDelivery = <div className="reward-extra-info">
                <span className="reward-delivery-title">ESTIMATED DELIVERY</span>
                <p className="reward-delivery-date">{this.props.reward.estimatedDelivery}</p>
            </div>
        }
        
        return (
            <li>
                <div className="reward-item-frame" onMouseEnter={this.hoverShow} onMouseLeave={this.hoverHide} >
                    {backedReward ? <div className="backed-reward-frame">You selected</div> : <div></div>}
                    <div 
                        id={`screen-${this.props.reward.id}`}
                        className={backedProject ? "pledge-form-screen gray-screen" : "pledge-form-screen green-screen"} 
                        onClick={this.clickShow}>
                        {backedProject ? "You have already backed this project" : "Select this reward"}</div>
                    <div className="pledge-info-container">
                        <h1 className="reward-amount">Pledge ${this.props.reward.minimum} or more</h1>
                        <h2 className="reward-title">{this.props.reward.title}</h2>
                        <p className="reward-desc">{this.props.reward.description}</p>
                        {estimatedDelivery}
                        {limited}
                        <p className="reward-backer-count">{this.props.reward.count} backers</p>
                    </div>

                    <div className="pledge-form-container hidden">
                        <form>
                            <p className="pledge-input-label">Pledge amount</p>
                            <span className="pledge-currency">$</span>
                            <input
                                className="pledge-input"
                                type="number"
                                min={this.props.reward.miminum}
                                value={this.state.value}
                                disabled={backedProject}
                                onChange={this.handleInput}>
                            </input>

                            <button
                                className={backedProject ? "btn btn-gray" : "btn btn-green"}
                                type="button"
                                onClick={this.handleSubmit}
                                disabled={backedProject}
                            >{backedReward ? "Backed" : "Continue"}
                            </button>
                            {/* {this.renderErrors()} */}
                            {/* {backedProject ? <p className="reward-backer-count">You have already backed this project</p> : null} */}
                        </form>
                    </div>
                </div>
            </li>)
    }
}

export default withRouter(Reward);