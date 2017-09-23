import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';
import firebase from 'firebase';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './App.css';

// Page imports
import Login from './components/Login';
import Header from './components/Header';
import Routes from './components/Routes';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: grey,
  },
});

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderAuth() {
    
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container-fluid main">
          <Header />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
