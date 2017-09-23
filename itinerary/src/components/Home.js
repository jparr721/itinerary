import React, { Component } from 'react';

import Modal from './Modal';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import firebase from 'firebase';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import SavedTrip from './SavedTrip';
import NearbyDeals from './NearbyDeals';
import Request from '../util/request';

require("./Home.css")

class Home extends Component {
  constructor () {
    super();
  }

  componentDidMount(){
    this.state = {
      user: null,
    };

    this.request = new Request();

    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null){
        this.setState({
          user : user
        });

      } else {
          this.props.history.push("/login");
      }
    });
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
      this.renderTrips();
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  renderTrips() {
    let trips = [];
    if (this.state.user !== null) {
        this.request.get('users/' + this.state.user.uid + '/trips').then((data) => {
            return trips;
        }, (err) => {
            console.log(err);
            return (trips);
        });
    }
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
                  {this.renderTrips()}
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <NearbyDeals/>
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
