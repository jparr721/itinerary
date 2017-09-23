import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import firebase from 'firebase';
import ExitToApp from 'material-ui-icons/ExitToApp';

require("./Header.css");

class Header extends Component {

  state = {
    username : "User"
  }

  constructor(props){
    super(props);
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null){
        console.log(user);
        this.setState({
          username : user.displayName
        });
      } else {
          props.history.push("/login");
      }
    });
  }

  render () { return (
    <div className="header">
      <AppBar position="static" color="primary">
        <div className="row">
          <div className="col-4 text-left">
            <p className="username">Hi, {this.state.username}</p>
          </div>
          <div className="col-4 text-center">
            <h1>Itinerary</h1>
          </div>
          <div className="col-4 pad-thai">
            <IconButton>
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
