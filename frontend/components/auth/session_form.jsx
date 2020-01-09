import React from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
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
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
            .then(() => this.props.history.push("/"),
            () => {this.setState({errors: [...this.props.errors]})});
            // .then(() => this.props.history.push("./profile"))
    }

    renderErrors() {
        if (this.state.errors.length === 0) return null;
        return (
            <section className="display-error">
                <ul>
                    {this.state.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </section>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <div className="auth-content-box">
                <section className="auth-content-frame">
                    <p className="form-title">Log in</p>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="form-input"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleInput("email")} />

                        <input
                            className="form-input"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput("password")} />

                        <button className="btn btn-green" type="submit">Log in</button>

                        <button className="btn btn-blue" onClick={this.demoUser}>Demo User</button>
                    </form>
                </section>

                <section className="switch-to-frame to-signup">
                    New to Jumpstarter?
                    <Link to="/signup">Sign up</Link>
                </section>
            </div>)
    };

    demoUser(){
        this.setState({email: "demo_user@email.com", password: "password"});
        setTimeout(() => this.props.login(this.state), 1000);
    }

};