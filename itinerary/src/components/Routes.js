import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page imports
import Home from './Home';
import Login from './Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
