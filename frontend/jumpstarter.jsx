import React from "react"
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUserId: window.currentUser.id },
            entities: {
                users: {
                    [window.currentUser.id]:window.currentUser
                }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    // test
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});


// test - success on 2020/1/6
// import * as SessionUtil from "./utils/session"
// window.login = SessionUtil.login;
// window.signup = SessionUtil.signup;
// window.update = SessionUtil.update;
// window.logout = SessionUtil.logout;

// test - success on 2020/1/8
// import * as ProjectUtil from "./utils/project_util"
// window.fetchProjects = ProjectUtil.fetchProjects;
// window.fetchProject = ProjectUtil.fetchProject;
// window.createProject = ProjectUtil.createProject;
// window.updateProject = ProjectUtil.updateProject;
// window.deleteProject = ProjectUtil.deleteProject;

import {fetchProjects, fetchProject} from "./actions/project_actions";
window.fetchProjects = fetchProjects;
window.fetchProject = fetchProject;