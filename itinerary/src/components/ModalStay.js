import React, { Component } from 'react';

import Request from '../util/request';

// Material UI
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import axios from 'axios';
import firebase from 'firebase';

class ModalStay extends Component {

  findHotelsWrapper(location, radius){
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.800870,-96.830803&radius=400&name=Sheraton&key=[key]



    let promise = axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json"
      + "?location=" + location.lat + "," + location.lng
      + "&radius=" + radius
      + "&name=Hotel"
      + "&key=AIzaSyALHlOruFkkmf3LUnbjRut_ORZmpkS2tsM");

    promise.then((res) => {
      console.log(res);
    });


  }

  findHotels(){
    var user = firebase.auth().currentUser;

    if (user){
      Request.get("trip/" + user.uid).then((res) => {
        
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Where would you like to stay?</h1>
        <div className="row">
          <div className="col-4">
            <Card className="main-card">
              <Typography type="title" clasName="title">
                Hotels Here
              </Typography>
              <CardContent>
                Hotel Info and Price
              </CardContent>
            </Card>
          </div>
          <div className="col-4">
            <Card className="main-card">
              <Typography type="title" clasName="title">
                Hotels Here
              </Typography>
              <CardContent>
                Hotel Info and Price
              </CardContent>
            </Card>
          </div>
          <div className="col-4">
            <Card className="main-card">
              <Typography type="title" clasName="title">
                Hotels Here
              </Typography>
              <CardContent>
                Hotel Info and Price
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  };
}

export default ModalStay;
