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
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import MenuIcon from 'material-ui-icons/Menu';

require("./Header.css");

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      firebaseUser : null,
      username : null,
      avatarURL : null,
      left : false,
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null){
        console.log(user);
        this.setState({
          firebaseUser : user,
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

  toggleDrawer() {

    this.setState({
      left : !this.state.left
    });

  }

  render () {

    const isLoggedIn = this.state.username !== null;

    var sideNavButton = null;
    var logoutButton = null;
    var sideNavContents = null;

    if (isLoggedIn) {
      /*nameAndAvatar =
        */

       sideNavButton =
         <IconButton onClick={() => this.toggleDrawer()}>
           <MenuIcon/>
         </IconButton>

       logoutButton =
        <IconButton onClick={() => this.logout()}>
          <ExitToApp/>
        </IconButton>

        sideNavContents =
        <div>
          <div className="avatar-container">
            <Avatar
              alt={this.state.username}
              src={this.state.avatarURL}
              className="avatar"
            />
          </div>
          <p className="username">{this.state.firebaseUser.email}</p>
        </div>
    }

    return (
    <div className="header">

      <Drawer open={this.state.left} onRequestClose={() => this.toggleDrawer()}>
        {sideNavContents}
      </Drawer>

      <AppBar position="static" color="primary">
        <div className="row">
          <div className="col-4 text-left pad-thai">
            {sideNavButton}
          </div>
          <div className="col-4 center">
            <h1>Itinerary</h1>
          </div>
          <div className="col-4 pad-thai">
            {logoutButton}
          </div>
        </div>
      </AppBar>
    </div>
    );
  }
};

export default Header;
