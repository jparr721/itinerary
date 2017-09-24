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

require("./Home.css");

class Home extends Component {
  constructor () {
    super();

    this.state = {
        user: null,
        trips: null
    };
  }

  componentDidMount(){
    this.request = new Request();

    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null){
        this.setState({
            user : user,
            trips: null
        });

          this.renderTrips().then((trips) => {
              this.setState({
                  trips: trips
              });
          }, (err) => {
              console.log(err);
          });

      } else {
          this.props.history.push("/login");
      }
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  renderTrips() {
      return new Promise((resolve) => {
          let trips = [];
          if (this.state.user !== null) {
              this.request.get('users/' + this.state.user.uid + '/trips').then((data) => {
                  for (let key in data.data) {
                      if (data.data.hasOwnProperty(key)) {
                          trips.push({
                              trip: data.data[key]
                          });
                      }
                  }
                  resolve (trips);
              }, (err) => {
                  console.log(err);
                  resolve (trips);
              });
          } else {
              resolve (trips);
          }
      });
  }

  actuallyRenderTrips() {
      if (this.state.trips && this.state.trips.length > 0) {
          return this.state.trips.map((key, index) => (
              <Card className="main-card col-12">
                  <CardContent>
                      <SavedTrip data={this.state.trips[index].trip}/>
                  </CardContent>
              </Card>
          ));

      } else {
          return <Card className="main-card col-12">
              <CardContent>
                  <span>No saved trips.</span>
              </CardContent>
          </Card>;
      }
  }

  renderUpcomingTrips() {
      if (this.state.trips && this.state.trips.length > 0) {
          let trips = [];
          this.state.trips.map((key, index) => {
              let cur_trip = this.state.trips[index].trip;
              let today = new Date();
              let next_month = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
              if (this.isInDateRange(new Date(cur_trip.start_date), new Date(cur_trip.end_date), today, next_month)) {
                  trips.push(<Card className="main-card col-12">
                      <CardContent>
                          <SavedTrip key={index} data={this.state.trips[index].trip}/>
                      </CardContent>
                  </Card>);
              }
          });
          return trips;
      } else {
          return <Card className="main-card col-12">
              <CardContent>
                  <span>No saved trips.</span>
              </CardContent>
          </Card>;
      }
  }

    isInDateRange(start_date, end_date, today, next_week) {
      console.log(start_date + " | " + end_date + " | " + today + " | " + next_week);
        return (start_date >= today && start_date <= next_week) ||
            (today >= start_date && today <= end_date);
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row main">
          <div className="col-md-4">
            <h2>Upcoming Trips</h2>
              {this.renderUpcomingTrips()}
          </div>
          <div className="col-md-4">
              <h2>Saved Trips</h2>
              {this.actuallyRenderTrips()}
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
