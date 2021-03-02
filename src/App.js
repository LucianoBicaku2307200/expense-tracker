import React from "react";
import "./style/app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  AddActivityPage,
  AddBalancePage,
  AddGoalPage,
  AllActivitiesPage,
  BalancesPage,
  HomePage,
  LoginPage,
  SettingsPage,
  SignUpPage,
  StartingPage,
  ViewStatsPage,
} from "./pages";
import { Container } from "./layouts";
const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/add-activity" exact component={AddActivityPage} />
          <Route path="/add-balance" exact component={AddBalancePage} />
          <Route path="/all-activities" exact component={AllActivitiesPage} />
          <Route path="/balances" exact component={BalancesPage} />
          <Route path="/add-goal" exact component={AddGoalPage} />
          <Route path="/dashboard" exact component={HomePage} />
          <Route path="/settings" exact component={SettingsPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/view-stats" exact component={ViewStatsPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={StartingPage} />

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
