import React from "react";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        // this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (event) => {
            this.setState({
                [type]: event.target.value
            })
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewUser(this.state)
            // .then(() => this.props.history.push("./profile"))
    }

    render() {
        return (
            <div className="session-form">
                <h2>Log in</h2>
                <form>
                    <input
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleInput("email")} />

                    <input
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput("password")} />

                    <button onClick={this.handleSubmit}>
                        Login
                    </button>
                </form>

                <section className="switch-to-signup">
                    <p>New to Jumpstarter?</p>
                    <a href="/signup">Sign Up</a>
                </section>
            </div>)
    };
};