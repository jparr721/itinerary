import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import Backspace from 'material-ui-icons/Backspace';

class Modal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <Tooltip placement="top" title="Start your new adventure!">
          <Button fab color="primary" aria-label="add" onClick={this.handleOpenModal}>
            <AddIcon />
          </Button>
        </Tooltip>
        <ReactModal
          isOpen={this.state.showModal}>
          <IconButton color="primary" aria-label="Add to shopping cart" onClick={this.handleCloseModal}>
            <Backspace />
          </IconButton>
        </ReactModal>
      </div>
    );
  };
}

export default Modal;
