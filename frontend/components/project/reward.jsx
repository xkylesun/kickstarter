import React from "react";

export default class Reward extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.reward.minimum,
            showForm: false
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
        this.props.createPledge({
            backer_id: this.props.userId,
            project_id: this.props.projectId,
            reward_id: this.props.rewardId,
            amount: this.state.value
        }).then(
            (payload) => {
                console.dir(payload)
                // this.props.history.push(`/checkouts/${payload.pledgeID}/payments`)
            }
        )
    }

    hoverShow(e) {
        if (!this.state.showForm) {
            e.currentTarget.childNodes[0].classList.remove("hidden")
        }
    }

    hoverHide(e) {
        if (!this.state.showForm) {
            e.currentTarget.childNodes[0].classList.add("hidden")
        }
    }

    clickShow(e) {
        this.setState({ showForm: true });
        e.currentTarget.parentNode.childNodes[2].classList.remove("hidden");
        e.currentTarget.parentNode.childNodes[0].classList.add("hidden");
    }

    render() {
        var limited;
        var estimatedDelivery;
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
                    <div className="pledge-form-screen hidden" onClick={this.clickShow}><p>Select this reward</p></div>
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
                                onChange={this.handleInput}>
                            </input>

                            <button
                                className="btn btn-green"
                                id="plege-form-btn"
                                type="button"
                                onClick={this.handleSubmit}
                            >Continue
                            </button>
                        </form>
                    </div>
                </div>
            </li>)
    }
}