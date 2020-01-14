import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute, PaymentRoute } from '../utils/route_util';
import SignupFormContainer from "./auth/signup_form_container";
import LoginFormContainer from "./auth/login_form_container";
import CatchAll from "./catch_all";
import HomeContainer from "./home/home_container"
import NavbarContainer from "./navbar/navbar_container";
import StartProjectContainer from "./start_project/start_project_container";
import UserProfileContainer from "./user/user_profile_container";
import ProjectContainer from "./project/project_container";
import PaymentContainer from "./payment/payment_container";

const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/profile/:userId/" component={UserProfileContainer} />
            <Route exact path="/projects/:projectId" component={ProjectContainer} />
            <ProtectedRoute exact path="/start" component={StartProjectContainer} />
            <ProtectedRoute exact path="/settings" component={UserProfileContainer} />
            <PaymentRoute exact path="/checkouts/:rewardId/payments" component={PaymentContainer} />
            <Route component={CatchAll} />
        </Switch>
    </div>
);

export default App;