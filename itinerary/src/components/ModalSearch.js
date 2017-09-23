import React, { Component } from 'react';

// Material UI
import TextField from 'material-ui/TextField';

class ModalSearch extends Component {
  handleChange = location => event => {
    this.setState({
      [location]: event.target.value,
    });
  };
  render() {
    return (
      <div className="modal-search">
        <h1>Where would you like to go?</h1>
        <form noValidate autoComplete="off">
          <h3>
<<<<<<< HEAD
            <TextField
                id="full-width"
                label="Search!"
                InputProps={{ placeholder: 'Paris, France' }}
                helperText="Vacation in your dream spot"
                onChange={this.handleChange('location')}
                fullWidth
                margin="normal"
              />
            </h3>
          </form>
        <iframe className="map"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDpZF4UlkJ1bIvg5sG29oyxWfR20fODMDI
            &q=${this.state.location}`} allowFullScreen>
=======
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
>>>>>>> c073c32efb2bb05e3f1e0363fab618ea67ec4fc5
        </iframe>
      </div>
    );
  };
}

export default ModalSearch;
