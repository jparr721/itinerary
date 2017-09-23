import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page imports
import Home from './Home';

const Routes = () => {
  return (
    <routes>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </routes>
  )
}
