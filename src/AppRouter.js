import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import AccountPage from './containers/AccountPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/account' component={AccountPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
