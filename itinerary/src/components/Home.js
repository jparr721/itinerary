import React, { Component } from 'react';

import Modal from './Modal';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import firebase from 'firebase';


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
      <div>
        <div className="row main text-center">
          <div className="col-4">
            <h2>Upcoming Trips</h2>
          </div>
          <div className="col-4">
            <h2>Saved Trips</h2>
          </div>
          <div className="col-4">
            <h2>Deals in your area</h2>
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
