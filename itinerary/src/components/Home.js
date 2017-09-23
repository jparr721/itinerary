import React, { Component } from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

class Home extends Component {

  state = {
    placement: 'bottom',
  };

  handlePlacementChange = (event, placement) => {
    this.setState({ placement });
  };

  render() {
    return (
      <div>
        <div className="row main text-center">
          <div className="col-4">
            <h2>Upcoming Trips</h2>
          </div>
          <div className="col-4">
            <h2>Saved Trips</h2>
          </div>
          <div className="col-4">
            <h2>Deals in your area</h2>
          </div>
        </div>
        <footer>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
          <div className="col-4 text-right button-holder">
              <Button fab color="primary" aria-label="add">
                <AddIcon />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    );
  };
}

export default Home;
