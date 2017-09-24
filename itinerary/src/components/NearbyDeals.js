

import React, { Component } from 'react';
import './Login.css';
import background from './splash.jpg'
import Button from 'material-ui/Button';
import Request from '../util/request';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import firebase from 'firebase';

import axios from 'axios';

require("./NearbyDeals.css");

class NearbyDeals extends Component {

  constructor(props){
    super(props);

    this.state = {
      location : {
        latitude: null,
        longitude: null
      }
    };

    navigator.geolocation.getCurrentPosition((position) => {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;

      this.state = {
        location: {
          latitude: latitude,
          longitude: longitude,
        }
      };
    });

    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/output?key=AIzaSyALHlOruFkkmf3LUnbjRut_ORZmpkS2tsM')
      .then(response => {

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  render() {

    let map = null;

    if (this.state.location != null){
      map =
        <CardMedia
          className="map-img"
          image={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.state.location.latitude + "," + this.state.location.longitude + "&zoom=13&size=400x400&sensor=false"}
          title="Contemplative Reptile"
        />
    }

    return (
      <div className="wrapper">
        <Card className="main-card">
          <Typography type="title" className="title">
            Deals in your area
          </Typography>
            {map}
          <CardContent>

          </CardContent>
        </Card>
      </div>
    );
  }
}

export default NearbyDeals;
