import React from "react"
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    // test
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});


// test - success on 2020/1/6
import * as APIUtil from "./utils/session"
window.login = APIUtil.login;
window.signup = APIUtil.signup;
window.update = APIUtil.update;
window.logout = APIUtil.logout;