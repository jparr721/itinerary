import React, { Component } from 'react';
import ReactModal from 'react-modal';

// Pages
import ModalSearch from './ModalSearch';

// Material UI
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import NavigateBefore from 'material-ui-icons/NavigateBefore';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import AddLocationIcon from 'material-ui-icons/AddLocation';

class Modal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      value: 'whereto',
      children: ModalSearch,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleChange = (event, value, children) => {
    this.setState({ value, children });
  };

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }


  render() {
    const { value, children } = this.state;
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
            <NavigateBefore />
          </IconButton>

        </ReactModal>
      </div>
    );
  };
}

export default Modal;
