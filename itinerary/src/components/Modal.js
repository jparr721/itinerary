import React, { Component } from 'react';
import ReactModal from 'react-modal';

// Pages
import ModalSearch from './ModalSearch';
import ModalStay from './ModalStay';
import ModalTravel from './ModalTravel';
import ModalTotal from './ModalTotal';

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
      currentView: <ModalSearch />
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeStep: 0,
    });
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
    this.renderViews();
    console.log(this.state.activeStep);

  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
    this.renderViews();
    console.log(this.state.activeStep);

  };

  renderViews() {
    switch(this.state.activeStep) {
      case 0:
        this.setState({ currentView: <ModalSearch /> });
        break;
      case 1:
        this.setState({ currentView: <ModalStay /> });
        break;
      case 2:
        this.setState({ currentView: <ModalTravel /> });
        break;
      case 3:
        this.setState({ currentView: <ModalTotal /> });
        break;
      default:
        break;
    }
  }

  renderSearch() {
    // console.log(this.state.activeStep);
    // if (this.state.activeStep === 0)
      return <ModalSearch />
  }
  renderStay() {
    // if (this.state.activeStep === 1)
      return <ModalStay />
  }
  renderTravel() {
    // if (this.state.activeStep === 2)
      return <ModalTravel />
  }
  renderTotal() {
    // if (this.state.activeStep === 3)
      return <ModalTotal />
  }




  render() {
    const { value, activeStep } = this.state;
    return (
      <div className="container">
        <Tooltip placement="top" title="Start your new adventure!">
          <Button fab color="primary" className="fabulous" aria-label="add" onClick={() => this.handleOpenModal()}>
            <AddIcon />
          </Button>
        </Tooltip>
        <ReactModal
          isOpen={this.state.showModal}>
          <IconButton color="primary" aria-label="Add to shopping cart" onClick={() => this.handleCloseModal()}>
            <NavigateBefore />
          </IconButton>
          {this.state.currentView}

          <MobileStepper
            type="dots"
            steps={4}
            position="static"
            activeStep={this.state.activeStep}
            className="stepper"
            nextButton={
              <Button dense onClick={() => this.handleNext()} disabled={this.state.activeStep === 3}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button dense onClick={() => this.handleBack()} disabled={this.state.activeStep <= 0}>
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
