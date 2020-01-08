import React from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        // this.handleInput = this.handleInput.bind(this);
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
        console.dir(this.state)
        event.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/"));
            // .then(() => this.props.history.push("./profile"))
        setTimeout(()=> console.dir(this.props),1000)
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
                <section>
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

                <section className="switch-to-frame">
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