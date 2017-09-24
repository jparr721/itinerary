import React, { Component } from 'react';

import geocoder from 'geocoder';

// Material UI
import TextField from 'material-ui/TextField';

import { compose, withProps, withState, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

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
    center = {props.center}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >

  </GoogleMap>
);

class ModalSearch extends Component {

  constructor(){
    super();
    this.state = {
      location : "",
      map_center: null
    };
  }

  componentDidMount(){
    this.setState({
      map_center : null,
    });
  }

  _handleTextFieldChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  mapSearch(input){
    //console.log(input);

    geocoder.geocode(input,  ( err, data ) => {
      // do something with data
      //console.log(data);

      console.log(data.results["0"]);

      if (data.results.length > 0) {
        var geo_result = data.results["0"].geometry.location;

        //console.log("Geo res: " +  data.results[0]);

        //console.log("lat " + geo_result.lat);
        //console.log("lng " + geo_result.lng);

        this.setState({
          map_center : geo_result
        });

        console.log("lat " + this.state.map_center.lat);
        console.log("lng " + this.state.map_center.lng);
      }

    });
  }

  render() {
    return (
        <div className="container-fluid expand">
          <div className="row expand">
            <div className="col-sm-4">
              <h1>Where would you like to go?</h1>
              <form noValidate autoComplete="off" onSubmit={e => {
                  e.preventDefault();

                  this.mapSearch(this.state.location);
                }}>
                <h3>
                <TextField
                    id="location"
                    label="Search!"
                    InputProps={{ placeholder: 'Paris, France' }}
                    helperText="Vacation in your dream spot"
                    fullWidth
                    margin="normal"
                    onChange={(e) => this._handleTextFieldChange(e)}
                  />
                </h3>
              </form>
            </div>
            <div className="col-lg-8 map-container expand"> {/*AIzaSyDpZF4UlkJ1bIvg5sG29oyxWfR20fODMDI*/}
              <MapWithControlledZoom
                zoom="18"
                center={this.state.map_center}
                className="map expand">
              </MapWithControlledZoom>
            </div>
          </div>
        </div>
    );
  };
}

export default ModalSearch;
