import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

// Page imports
import Login from './components/Login';
import Header from './components/Header';
import Routes from './components/Routes';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyA5HLv6TfNjeCbrW1VWSi-xwoCME6eRqfw",
      authDomain: "itinerary-e48aa.firebaseapp.com",
      databaseURL: "https://itinerary-e48aa.firebaseio.com",
      projectId: "itinerary-e48aa",
      storageBucket: "itinerary-e48aa.appspot.com",
      messagingSenderId: "765300072671"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
