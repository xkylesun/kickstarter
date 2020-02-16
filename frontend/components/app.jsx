import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import SignupFormContainer from "./auth/signup_form_container";
import LoginFormContainer from "./auth/login_form_container";
import CatchAllContainer from "./catch_all/catch_all_container";
import HomeContainer from "./home/home_container"
import NavbarContainer from "./navbar/navbar_container";
import StartProjectContainer from "./start_project/start_project_container";
import EditProjectContainer from "./edit_project/edit_project_container";
import UserProfileContainer from "./user/user_profile_container";
import CreateProjectsContainer from "./user/created_projects_container"
import ProjectContainer from "./project/project_container";
import PaymentContainer from "./payment/payment_container";
import IndexContainer from "./discover/discover_container";
import FootBar from "./foot_bar";

const App = () => (
    <div>
        <NavbarContainer/>
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/profile/projects" component={CreateProjectsContainer} />
            <ProtectedRoute exact path="/profile/" component={UserProfileContainer} />
            <Route exact path="/profile/:userId/" component={UserProfileContainer} />
            <Route exact path="/projects/:projectId" component={ProjectContainer} />
            <Route exact path="/discover/ref=:filterType=:searchTerm" component={IndexContainer}/>
            <ProtectedRoute exact path="/start" component={StartProjectContainer} />
            <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectContainer} />
            <ProtectedRoute exact path="/checkouts/:pledgeId/payments" component={PaymentContainer} />
            <Route component={CatchAllContainer} />
        </Switch>
        <FootBar />
    </div>
);

export default App;