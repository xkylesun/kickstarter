import React from "react";
import { connect } from "react-redux";
import { signup, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session.responseJSON || [],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: formUser => dispatch(signup(formUser)),
        clearErrors: () => dispatch({ type: CLEAR_SESSION_ERRORS })
    };
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

export default SignupFormContainer;