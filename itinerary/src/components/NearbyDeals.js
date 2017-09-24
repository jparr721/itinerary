

import React, { Component } from 'react';
import './Login.css';
import background from './splash.jpg'
import Button from 'material-ui/Button';
import Request from '../util/request';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import firebase from 'firebase';

import axios from 'axios';

import { compose, withProps, withState, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";


require("./NearbyDeals.css");


const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    center={props.center}
    onZoomChanged={props.onZoomChanged}
  >

  </GoogleMap>
);

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

  }

  render() {

    let map = null;

    if (this.state.location != null){
      map =
        <MapWithControlledZoom center={{
          lat : this.state.location.latitude,
          lng : this.state.location.longitude
        }}></MapWithControlledZoom>
    }

    return (
      <div className="wrapper">
        <h2>Deals in your area</h2>
        <Card className="main-card">
            {map}
          <CardContent>

          </CardContent>
        </Card>
      </div>
    );
  }
}

export default NearbyDeals;
