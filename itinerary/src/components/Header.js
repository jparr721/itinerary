import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import firebase from 'firebase';
import ExitToApp from 'material-ui-icons/ExitToApp';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

require("./Header.css");

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      username : null,
      avatarURL : null,
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null){
        console.log(user);
        this.setState({
          username : user.displayName,
          avatarURL : user.photoURL,
        });
      } else {
        this.setState({
          username : null,
          avatarURL : null,
        });
      }
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render () {

    const isLoggedIn = this.state.username != null;

    var nameAndAvatar = null;

    if (isLoggedIn) {
      nameAndAvatar =
        <div className="row">
          <div className="avatar-container avatar">
          <Avatar
            alt={this.state.username}
            src={this.state.avatarURL}
            className="avatar"
          />
          </div>
          <p className="username">Hi, {this.state.username}</p>
        </div>
    }

    return (
    <div className="header">
      <AppBar position="static" color="primary">
        <div className="row">
          <div className="col-4 text-left">
            {nameAndAvatar}
          </div>
          <div className="col-4 text-center">
            <h1>Itinerary</h1>
          </div>
          <div className="col-4 pad-thai">
            <IconButton onClick={() => this.logout()}>
              <ExitToApp/>
            </IconButton>
          </div>
        </div>
      </AppBar>
    </div>
    );
  }
};

export default Header;
