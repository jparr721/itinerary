import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page imports
import Home from './Home';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
  );
}

export default Routes;
