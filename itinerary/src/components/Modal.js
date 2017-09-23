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
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import MobileStepper from 'material-ui/MobileStepper';

require('./Modal.css')

class Modal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      value: 'whereto',
      activeStep: 0,
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

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  renderSearch() {
    if (this.state.activeStep === 1)
      return <ModalSearch />
  }

  render() {
    const { value, activeStep } = this.state;
    return (
      <div className="container">
        <Tooltip placement="top" title="Start your new adventure!">
          <Button fab color="primary" className="fabulous" aria-label="add" onClick={this.handleOpenModal}>
            <AddIcon />
          </Button>
        </Tooltip>
        <ReactModal
          isOpen={this.state.showModal}>
          <IconButton color="primary" aria-label="Add to shopping cart" onClick={this.handleCloseModal}>
            <NavigateBefore />
          </IconButton>
          {this.renderSearch}
          <MobileStepper
            type="dots"
            steps={6}
            position="static"
            activeStep={this.state.activeStep}
            className=""
            nextButton={
              <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </ReactModal>
      </div>
    );
  };
}

export default Modal;
