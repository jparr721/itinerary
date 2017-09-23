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
              console.log(trips);
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
                              key: key
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
      console.log('i hate asdlfkj');
      if (this.state.trips && this.state.trips.length > 0) {
          console.log('RENDERING SHIT');
          return this.state.trips.map((key) => <SavedTrip id={key} />);
      } else {
          console.log('FUCK');
          return <span>No saved trips.</span>;
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
                  {this.actuallyRenderTrips()}
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
