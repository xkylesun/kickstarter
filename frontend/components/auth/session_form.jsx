import React from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
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
        event.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/"))
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

                    <button onClick={this.demoUser}> 
                        Demo User
                    </button>
                </form>

                <section className="switch-to-signup">
                    <p>New to Jumpstarter?</p>
                    <Link to="/signup">Sign up</Link>
                </section>
            </div>)
    };

    demoUser(){
        this.setState({email: "test04@gmail.com", password: "password"});
        setTimeout(() => this.props.login(this.state), 1000);
    }
};