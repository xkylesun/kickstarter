import React from "react";
import { connect } from "react-redux";
import { login, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session.responseJSON || [],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
        clearErrors: () => dispatch({ type: CLEAR_SESSION_ERRORS })
    };
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;