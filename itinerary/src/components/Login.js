import React, { Component } from 'react';
import './Login.css';
import background from './splash.jpg'
import Button from 'material-ui/Button';
import Request from '../util/request';

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

    this.request = new Request();

    firebase.auth().onAuthStateChanged((user) => {

      if (user != null){
        this.props.history.push("/");
        this.createUser(user);
      }
    });
  }

  createUser(user) {
    this.request.get('users/' + user.uid + "/exists").then((data) => {
      let exists = data.data.exists;
      if (!exists) {
        this.request.post('users/create', {
          id: user.uid,
          name: user.displayName,
          email: user.email
        }).then((data) => {
          console.log(data);
         }, (err) => {
          console.log(err);
        });
      }
    }, (err) => {
      console.log(err);
    });
  }

  loginCommon = (provider) => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...

      this.props.history.pop();



    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
      //
      this.error = errorCode + " : " + errorMessage;
    });
  };

  loginFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.loginCommon(provider);
  }

  loginTwitter() {
    let provider = new firebase.auth.TwitterAuthProvider();
    this.loginCommon(provider);
  }

  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.loginCommon(provider);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="title-container center">
          <Card className="overlay login-card">
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
