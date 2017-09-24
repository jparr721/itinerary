import React, { Component } from 'react';

class ModalTotal extends Component {
  render() {
    return (
      <div>
        <h1>Tally-Ho! Here's the total</h1>
        <p className="animated fadeInUp"><strong>Total cost of hotel:</strong></p>
        <p className="animated fadeInUp transport-card-header"><strong>Total cost of travel:</strong></p>
        <p className="animated fadeInUp transport-card-subtext"><strong>Grand Total:</strong></p>
      </div>
    );
  };
}

export default ModalTotal;
