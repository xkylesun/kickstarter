import React from "react";
import { Link } from 'react-router-dom';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            reEmail: "",
            password: "",
            rePassword: "",
            errors: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = this.check.bind(this);
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
        this.props.clearErrors();
        console.dir(this.state.errors)
        if (this.check()){
            this.props.signup({
                name: this.state.name,
                email: this.state.reEmail, 
                password: this.state.rePassword
            }).then(
                () => this.props.history.push("/"),
                () => this.setState({errors: this.props.errors})
            )
        }
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

    reEnter (itemId) {
        return () => {
            document.getElementById(itemId).classList.remove("hidden");
        };
    };
    
    check() {
        let errors = [];
        if (this.state.email !== this.state.reEmail){
            errors.push("Email confirmation doesn't match Email")
        }

        if (this.state.password !== this.state.rePassword){
            errors.push("Password confirmation doesn't match Password")
        }
        if (errors.length === 0){
            return true;
        } else {
            this.setState({ errors: [...this.props.errors].concat(errors) });
        }
    }

    componentWillUnmount(){
        this.props.clearErrors();
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
                    <form onSubmit={ this.handleSubmit }>
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
                            onChange={(e)=>{
                                this.handleInput("email")(e);
                                this.reEnter("re-email")();
                            }}
                        />

                        <input
                            className="form-input hidden"
                            id="re-email"
                            type="email"
                            placeholder="Re-enter email"
                            value={this.state.reEmail}
                            onChange={this.handleInput("reEmail")} />

                        <input
                            className="form-input"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(e) => {
                                this.handleInput("password")(e);
                                this.reEnter("re-password")();
                            }} />

                        <input
                            className="form-input hidden"
                            id="re-password"
                            type="password"
                            placeholder="Re-enter Password"
                            value={this.state.rePassword}
                            onChange={this.handleInput("rePassword")} />

                        <button className="btn btn-green" type="submit">Create account</button>
                        <p id="auth-disclaimer">By signing up, you agree to our terms of use, privacy policy, and cookie policy.</p>
                    </form>
                </section> 
            </div>)
    };
};