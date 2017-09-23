import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';

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
      <div>
        <Login>
        </Login>
      </div>
    );
  }
}

export default App;
