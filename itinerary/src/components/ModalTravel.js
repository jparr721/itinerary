import React, { Component } from 'react';

import Card, { CardActions, CardContent } from 'material-ui/Card';

class ModalTravel extends Component {
  render() {
    return (
      <div className="container">
        <h1>How will you embark on your adventure?</h1>
      <div className="row text-center transport-options">
          <div className="col-3">
            <Card className="selection-card">
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
      </div>
    );
  };
}

export default ModalTravel;
