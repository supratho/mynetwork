import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Notes from "./containers/Notes";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import Homepage from "./containers/Homepage";

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import MyNetwork from "./containers/MyNetwork";
import Jobs from "./containers/Jobs";
import Notifications from "./containers/Notifications";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />

    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login/reset"
      exact
      component={ResetPassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={NewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={Notes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/homepage"
      exact
      component={Homepage}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/mynetwork"
      exact
      component={MyNetwork}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/jobs"
      exact
      component={Jobs}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notifications"
      exact
      component={Notifications}
      props={childProps}
    />

    <Route component={NotFound} />
  </Switch>
);
