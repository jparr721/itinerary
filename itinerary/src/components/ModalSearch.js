import React, { Component } from 'react';

class ModalSearch extends Component {
  render() {
    return (
      <div className="modal-search">
        <h1>Where would you like to go?</h1>
      <iframe className="map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDpZF4UlkJ1bIvg5sG29oyxWfR20fODMDI
            &q=Space+Needle,Seattle+WA" allowfullscreen>
        </iframe>
      </div>
    );
  };
}

export default ModalSearch;
