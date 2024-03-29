import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "../NavigationBar";
import LandingPage from "../Landing";
import CompetitionPage from "../Competition";
import NewCompetitionPage from "../NewCompetition";
import LeaderboardPage from "../Leaderboard";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import AccountPage from "../Account";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
    <Router>
        <div>
            <NavigationBar />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.COMPETITION} component={CompetitionPage} />
            <Route exact path={ROUTES.NEWCOMP} component={NewCompetitionPage} />
            <Route exact path={ROUTES.LEADERBOARD} component={LeaderboardPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </div>
    </Router>
);

export default withAuthentication(App);
