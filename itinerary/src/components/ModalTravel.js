import React, { Component } from 'react';

// Common components
import TransportModal from './common/TransportModal'

// Material UI
import Card, { CardActions, CardContent } from 'material-ui/Card';

class ModalTravel extends Component {
  constructor() {
    super();
    this.state = {
      showCarModal: false,
      showPlaneModal: false,
      showTrainModal: false,
      showBusModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
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
            <Card className="selection-card" onClick = {() => this.handleOpenModal()}>
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
          isOpen={this.state.showModal}>
            <h1>Hello World</h1>
          </TransportModal>
      </div>
    );
  };
}

export default ModalTravel;
