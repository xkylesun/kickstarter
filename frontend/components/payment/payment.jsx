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
        console.dir(this.props)
        const { title, value, minimum } = this.props.location.state;
        return (
            <div className="payment-frame">
                <div className="pledge-summary-frame">
                    <h1>Pledge</h1>
                    <section className="payment-pledge-content">
                        <ul>
                            <li>Project</li>
                            <li>Pledge</li>
                            <li>Total amount</li>
                        </ul>
                        <ul>
                            <li>{this.props.location.state.projectTitle}</li>
                            <li>${value} - {title}</li>
                            <li>${value}</li>
                        </ul>
                    </section>
                </div>

                <div className="payment-form-frame">
                    <form id="payment-form" onSubmit={this.handleSubmit}>
                        <label>Card number
                            <input type="text" placeholder="Card number" />
                        </label>
                        <label>Cardholder name
                        <input type="text" placeholder="Cardholder name" />
                        </label>
                        <label>Expiration
                            <input type="date" placeholder="MM / YY" />
                        </label>
                        <label>Security code
                            <input type="text" placeholder="CVC" />
                        </label>
                        <label>Zip/Postal code
                            <input type="text" placeholder="Zip/Postal code" />
                        </label>
                        <button type="submit">Pledge</button>
                    </form>
                    <section>
                        Your payment information is processed through Stripe. To complete transactions, we store the card type, last four digits, expiration, and name on the card. By pledging you agree to Kickstarter's Terms of Use, Privacy Policy and Cookie Policy. Our policies explain how we will use and store your data, and how you can control that use. You can edit your settings here.
                    </section>
                </div>

                <div className="payment-disclaimer">
                    <section className="payment-info">
                        <h2>Payment information</h2>
                        <p>This site is designed for educational purpose and does not include credit card verification and payment functionality.</p>
                    </section>
                    <section>
                        <h3>Jumpstarter is not a store</h3>
                        <p>It’s a way to bring creative projects to life. Jumpstarter does not guarantee projects or investigate a creator's ability to complete their project. It is the responsibility of the project creator to complete their project as promised, and the claims of this project are theirs alone.</p>
                    </section>
                </div>
            </div>
        )
    }
}