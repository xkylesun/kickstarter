import React from "react";

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
            .then(() => this.props.history.push("./chirps"))
    }

    render() {
        return (
            <div className="new-user-form">
                <h2>Sign Up</h2>
                <section className="switch-to-login">
                    <p>Have an account?</p>
                    <a href="/login">Log in</a>
                </section>

                <form>
                    <input
                        type="text"
                        placeholder="name"
                        value={this.state.username}
                        onChange={this.handleInput("name")} />

                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInput("email")} />

                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")} />

                    <button onClick={this.handleSubmit}>
                        Sign Up
                    </button>
                </form>
            </div>)
    };
};