import React, { Component } from 'react';

// Common components
import TransportModal from './common/TransportModal'

// Material UI
import Card, { CardActions, CardContent } from 'material-ui/Card';
import NavigateBefore from 'material-ui-icons/NavigateBefore';
import IconButton from 'material-ui/IconButton';

class ModalTravel extends Component {
  constructor() {
    super();
    this.state = {
      showCarModal: false,
      showPlaneModal: false,
      showTrainModal: false,
      showBusModal: false,
    };
    this.handleOpenCarModal = this.handleOpenCarModal.bind(this);
    this.handleOpenPlaneModal = this.handleOpenPlaneModal.bind(this);
    this.handleOpenBusModal = this.handleOpenBusModal.bind(this);
    this.handleOpenTrainModal = this.handleOpenTrainModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenCarModal() {
    this.setState({ showCarModal: true });
  }
  handleOpenPlaneModal() {
    this.setState({ showPlaneModal: true });
  }
  handleOpenTrainModal() {
    this.setState({ showTrainModal: true });
  }
  handleOpenBusModal() {
    this.setState({ showBusModal: true });
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
          <div className="col-3">
            <Card className="selection-card" onClick = {() => this.handleOpenCarModal()}>
              <i className="fa fa-car fa-5x"></i>
              <h2>Car</h2>
            </Card>
          </div>
          <div className="col-3">
            <Card className="selection-card">
              <i className="fa fa-plane fa-5x"></i>
              <h2>Plane</h2>
            </Card>
          </div>
          <div className="col-3">
            <Card className="selection-card">
              <i className="fa fa-train fa-5x"></i>
              <h2>Train</h2>
            </Card>
          </div>
          <div className="col-3">
            <Card className="selection-card">
              <i className="fa fa-bus fa-5x"></i>
              <h2>Bus</h2>
            </Card>
          </div>
        </div>
        <TransportModal
          isOpen={this.state.showCarModal}>
            <IconButton color="primary" onClick={() => this.handleCloseModal()}>
              <NavigateBefore />
            </IconButton>
            <h1>Hello World</h1>
          </TransportModal>
      </div>
    );
  };
}

export default ModalTravel;
