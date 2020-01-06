import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.login,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: formUser => dispatch(signup(formUser))
    };
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

export default SignupFormContainer;