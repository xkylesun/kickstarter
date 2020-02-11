import React from "react"
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        let preloadedState = {
            session: { currentUser: window.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});


// fetchUser(currentUser.id).then(
//     (payload) => {
//         console.log(payload);
//         preloadedState = {
//             session: { currentUser: payload }
//         };
//         store = configureStore(preloadedState);
//     }
// )