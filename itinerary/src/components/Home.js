import React, { Component } from 'react';

import Modal from './Modal';

class Home extends Component {
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
            <div className="col-4 button-holder">
              <Modal />
            </div>
          </div>
        </footer>
      </div>
    );
  };
}

export default Home;
