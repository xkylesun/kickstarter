import React from "react";


export default class Payment extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.createPledge({
            backer_id: this.props.userId,
            project_id: this.props.location.state.projectId,
            reward_id: this.props.match.params.rewardId,
            amount: this.props.location.state.value
        }).then(
            () => {
                alert("Payment successful! You will be redirected to project page in 5s");
                setTimeout(() => { this.props.history.push(`/projects/${this.props.location.state.projectId}`) }, 5000);
            }
        )
    }

    render() {
        if (!this.props.location.state) {
            this.props.history.push(`/`);
            return null;
        }
        const { title, value, minimum } = this.props.location.state;
        return (
            <div className="payment-frame">
                <div className="payment-left">
                    <div className="pledge-summary-frame">
                        <h1 className="pledge-title">Pledge</h1>
                        <section className="payment-pledge-content">
                            <ul className="summary-text summary-left">
                                <li>Project</li>
                                <li>Pledge</li>
                                <li>Total amount</li>
                            </ul>
                            <ul className="summary-text">
                                <li>{this.props.location.state.projectTitle}</li>
                                <li>${value.toFixed(2)} - {title}</li>
                                <li>${value.toFixed(2)}</li>
                            </ul>
                        </section>
                    </div>
                    <div className="payment-form-frame">
                        <form id="payment-form" onSubmit={this.handleSubmit}>
                            <h3>Card number</h3>
                            <input className="form-input payment-input" type="text" placeholder="Card number" />
                            
                            <h3>Cardholder name</h3>
                            <input className="form-input payment-input" type="text" placeholder="Cardholder name" />
                            
                            <div className="pay-inputs-container">
                                <span className="pay-exp">
                                    <h3>Expiration</h3>
                                    <input className="form-input payment-input" type="date" placeholder="MM / YY" />
                                </span>
                                <span>
                                    <h3>Security code</h3>
                                    <input className="form-input payment-input" type="text" placeholder="CVC" />
                                </span>
                            </div>
                            <h3>Zip/Postal code</h3>
                            <input className="form-input payment-input" type="text" placeholder="Zip/Postal code" />
                            
                            <button className="btn btn-green" type="submit">Pledge</button>
                        </form>
                        <section className="disclaimer-paragraph">
                            Your payment information is processed through Stripe. To complete transactions, we store the card type, last four digits, expiration, and name on the card. By pledging you agree to Kickstarter's Terms of Use, Privacy Policy and Cookie Policy. Our policies explain how we will use and store your data, and how you can control that use. You can edit your settings here.
                        </section>
                    </div>
                </div>

                <div className="payment-right">
                    <div className="payment-disclaimer">
                        <section className="payment-info">
                            <h2 className="disclaimer-title">Payment information</h2>
                            <p className="disclaimer-paragraph">This site is designed for educational purpose and does not include credit card verification and payment functionality.</p>
                        </section>
                        <section>
                            <h3 className="disclaimer-sub">Jumpstarter is not a store</h3>
                            <p className="disclaimer-p2">It’s a way to bring creative projects to life. Jumpstarter does not guarantee projects or investigate a creator's ability to complete their project. It is the responsibility of the project creator to complete their project as promised, and the claims of this project are theirs alone.</p>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}