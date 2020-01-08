import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignupFormContainer from "./auth/signup_form_container";
import SessionFormContainer from "./auth/session_form_container";
import CatchAll from "./catch_all";
import Home from "./home";
import NavbarContainer from "./nav_bar/nav_bar_container";
import StartProjectContainer from "./StartProject/start_project_container"
import UserProfileContainer from "./user/user_profile_container";

const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={SessionFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/profile/:currentUserId" component={UserProfileContainer}/>
            <ProtectedRoute exact path="/start" component={StartProjectContainer} />
            <Route component={CatchAll} />
        </Switch>
    </div>
);

export default App;