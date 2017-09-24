import React, { Component } from 'react';
import ReactModal from 'react-modal';

class TransportModal extends Component {
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.isOpen}>
          {this.props.children}
        </ReactModal>
      </div>
    );
  };
}

export default TransportModal;
