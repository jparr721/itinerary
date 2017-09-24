import React, { Component } from 'react';

// Common components
import TransportModal from './common/TransportModal'

// Material UI
import Card, { CardActions, CardContent } from 'material-ui/Card';
import NavigateBefore from 'material-ui-icons/NavigateBefore';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

class ModalTravel extends Component {
  constructor() {
    super();
    this.state = {
      showCarModal: false,
      showPlaneModal: false,
      showTrainModal: false,
      showBusModal: false,
      startingLocation: "",
      endingLocation: "",
    };
    this.handleOpenCarModal = this.handleOpenCarModal.bind(this);
    this.handleOpenPlaneModal = this.handleOpenPlaneModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenCarModal() {
    this.setState({ showCarModal: true });
  }
  handleOpenPlaneModal() {
    this.setState({ showPlaneModal: true });
  }
  _handleStartingTextFieldChange(e) {
    this.setState({
      startingLocation: e.target.value,
    });
  }
  _handleEndingTextFieldChange(e) {
    this.setState({
      endingLocation: e.target.value,
    });
  }

  handleCloseModal() {
    this.setState({
      showCarModal: false,
      showPlaneModal: false,
      showTrainModal: false,
      showBusModal: false,
    });
  }

  refreshTimes() {
    // Refresh the data for the plane info and other shit here
  }

  render() {
    return (
      <div className="container">
        <h1>How will you embark on your adventure?</h1>
      <div className="row text-center transport-options">
          <div className="col-6">
            <Card className="selection-card" onClick = {() => this.handleOpenCarModal()}>
              <i className="fa fa-car fa-5x"></i>
              <h2>Car</h2>
            </Card>
          </div>
          <div className="col-6">
            <Card className="selection-card" onClick={() => this.handleOpenPlaneModal()}>
              <i className="fa fa-plane fa-5x"></i>
              <h2>Plane</h2>
            </Card>
          </div>
        </div>
        <TransportModal
          isOpen={this.state.showCarModal}>
          <IconButton color="primary" onClick={() => this.handleCloseModal()}>
            <h1>
              <NavigateBefore />
            </h1>
          </IconButton>
          <h1 className="text-center animated fadeIn transport-card-header">Travelling by car?</h1>
          <p className="text-center animated fadeInUp transport-card-subtext">We need a little more info...</p>
          <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <h3>
                <TextField
                  id="startPoint"
                  label="Starting Location"
                  InputProps={{ placeholder: 'Sunshine, Rainbowland' }}
                  helperText="Where will you be LEAVING from in your beautiful car?"
                  fullWidth
                  margin="normal"
                  className="animated fadeInUp transport-card-subtext"
                  onChange={(e) => this._handleStartingTextFieldChange(e)}/>
                <TextField
                  id="endingPoint"
                  label="Ending Location"
                  InputProps={{ placeholder: 'Cotton Candy Land, Magical Wonderland Realm' }}
                  helperText="Where will you be ARRIVING in your beautiful car?"
                  fullWidth
                  margin="normal"
                  className="animated fadeInUp transport-card-subtext"
                  onChange={(e) => this._handleEndingTextFieldChange(e)}/>
              </h3>
          </form>
        </TransportModal>
        <TransportModal
          isOpen={this.state.showPlaneModal}>
          <IconButton color="primary" onClick={() => this.handleCloseModal()}>
            <h1>
              <NavigateBefore />
            </h1>
          </IconButton>
          <h1 className="text-center animated fadeIn transport-card-header">Travelling by plane?</h1>
        <p className="text-center animated fadeInUp transport-card-subtext">We'd load some options, but first we need to know where you're headed.</p>
          <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <h3>
                <TextField
                  id="startPoint"
                  label="Starting Location"
                  InputProps={{ placeholder: 'Magic Zone, Ohio' }}
                  helperText="Where will you be LEAVING from?"
                  fullWidth
                  margin="normal"
                  className="animated fadeInUp transport-card-subtext"
                  onChange={(e) => this._handleStartingTextFieldChange(e)}/>
                <TextField
                  id="endingPoint"
                  label="Ending Location"
                  InputProps={{ placeholder: 'Bill\'s House, Also Ohio' }}
                  helperText="Where will you be ARRIVING to?"
                  fullWidth
                  margin="normal"
                  className="animated fadeInUp transport-card-subtext"
                  onChange={(e) => this._handleEndingTextFieldChange(e)}/>
              </h3>
          </form>
        </TransportModal>
      </div>
    );
  };
}

export default ModalTravel;
