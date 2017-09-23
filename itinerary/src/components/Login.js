import React, { Component } from 'react';
import './Login.css';
import background from './splash.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <img src={background} className="background-img fadeIn" alt="logo" />
      </div>
    );
  }
}

export default Home;
