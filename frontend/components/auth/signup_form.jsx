import React from "react";
import { Link } from 'react-router-dom';

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
                [type]: event.currentTarget.value
            })
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/"))
    }

    render() {
        return (
            <div className="new-user-form">
                <h2>Sign Up</h2>
                <section className="switch-to-login">
                    <p>Have an account?</p>
                    <Link to="/login">Log in</Link>
                </section>

                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
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