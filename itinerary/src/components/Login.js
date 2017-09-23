import React, { Component } from 'react';
import './Login.css';
import background from './splash.jpg'
import Button from 'material-ui/Button';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import firebase from 'firebase';

import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import TwitterLoginButton from 'react-social-login-buttons/lib/buttons/TwitterLoginButton';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      error: ""
    };

    this.error = "";

    firebase.auth().onAuthStateChanged((user) => {

      firebase.auth().signOut();

      if (user != null){
        this.props.history.push("/home");
      }
    });
  }

  loginCommon = (provider) => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      this.props.history.pop();


    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      //
      this.error = errorCode + " : " + errorMessage;
    });
  }

  loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    this.loginCommon(provider);
  }

  loginTwitter(){
    var provider = new firebase.auth.TwitterAuthProvider();
    this.loginCommon(provider);
  }

  loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    this.loginCommon(provider);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="title-container">
          <Card className="overlay login-card col-lg-4">
            <CardContent>
              <div className="title center">
                Login or Register
              </div>
              <br/>
              <FacebookLoginButton text="Facebook" onClick={() => this.loginFacebook()} />
              <GoogleLoginButton text="Google" onClick={() => this.loginGoogle()} />
              <TwitterLoginButton text="Twitter" onClick={() => this.loginTwitter()} />
              <div className="error">
                {this.error}
              </div>
            </CardContent>
          </Card>
          <img src={background} className="background-img fadeIn" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Login;
