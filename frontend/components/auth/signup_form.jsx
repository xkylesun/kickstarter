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

    renderErrors() {
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

    render() {
        return (
            <div className="auth-content-frame">
            
                <section className="switch-to-frame">
                    Have an account?
                    <Link to="/login">Log in</Link>
                </section>

                <section>
                    <p className="form-title">Sign up</p>
                    {this.renderErrors()}
                    <form>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput("name")} />

                        <input
                            className="form-input"
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput("email")} />

                        <input
                            className="form-input"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput("password")} />

                        <button className="btn btn-green" onClick={this.handleSubmit}>Create account</button>
                        <p id="auth-disclaimer">By signing up, you agree to our terms of use, privacy policy, and cookie policy.</p>
                    </form>
                </section> 
            </div>)
    };
};