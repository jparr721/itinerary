import React from 'react';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static" color="primary">
        <div className="row">
          <div className="col-5">
            <p className="username">Hi, User</p>
          </div>
          <div className="col-7 text-left">
            <h1>Itinerary</h1>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
