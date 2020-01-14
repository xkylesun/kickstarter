import React from "react";
import { Link } from 'react-router-dom';

// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };

// Modal.setAppElement(SessionForm)

export default class LoginForm extends React.Component {
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
        <div className="auth-background login-background">
            <div className="auth-content-box">
                <section className="auth-content-frame">
                    <p className="form-title">Log in</p>
                    {this.renderErrors()}
                    <form className="auth-form" onSubmit={this.handleSubmit}>
                        <input
                            className="form-input auth-input"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleInput("email")} />

                        <input
                            className="form-input auth-input"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput("password")} />

                        <button className="btn btn-green" type="submit">Log in</button>
                        <div className="line">
                            <span className="line-left"></span>
                            <p>or</p>
                            <span className="line-right"></span>
                        </div>
                        <button className="btn btn-blue" type="button" onClick={this.demoUser}>Demo User</button>
                        <p className="disclaimer">Don't feel like signing up? Use demo account to experience Jumpstarter. Note that Jumpstarter will never send you email without your permission.</p>
                    </form>
                </section>
            </div>
            <div className="switch-to-frame to-signup">
                New to Jumpstarter?
                <Link to="/signup">Sign up</Link>
            </div>
        </div>)
    };

    demoUser(){
        this.setState({email: "demo_user@email.com", password: "password"});
        setTimeout(() => this.props.login(this.state), 1000);
    }

};