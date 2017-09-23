import React, { Component } from 'react';

// Material UI
import TextField from 'material-ui/TextField';

class ModalSearch extends Component {
  render() {
    return (
      <div className="modal-search">
        <h1>Where would you like to go?</h1>
        <form noValidate autoComplete="off">
          <h3>
          <TextField
              id="full-width"
              label="Search!"
              InputProps={{ placeholder: 'Paris, France' }}
              helperText="Vacation in your dream spot"
              fullWidth
              margin="normal"
            />
          </h3>
        </form>
        <iframe className="map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDpZF4UlkJ1bIvg5sG29oyxWfR20fODMDI
            &q=Space+Needle,Seattle+WA" allowFullScreen>
        </iframe>
      </div>
    );
  };
}

export default ModalSearch;
