import React, { Component } from 'react';

import Modal from './Modal';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import firebase from 'firebase';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

require("./Home.css")

class Home extends Component {
  constructor () {
    super();

    this.state = {
      showModal: false,
      user: null,
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null){
        this.setState({
          user : user
        });
      } else {
          this.props.history.push("/login");
      }
    });

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row main">
          <div className="col-md-4">
            <Card className="main-card">
              <Typography type="title" className="title">
                Upcoming Trips
              </Typography>
              <CardContent>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="main-card">
              <Typography type="title" className="title">
                Saved Trips
              </Typography>
              <CardContent>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="main-card">
              <Typography type="title" className="title">
                Deals in your area
              </Typography>
              <CardContent>
              </CardContent>
            </Card>
          </div>
        </div>
        <footer>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4 button-holder">
              <Modal />
            </div>
          </div>
        </footer>
      </div>
    );
  };
}

export default Home;
