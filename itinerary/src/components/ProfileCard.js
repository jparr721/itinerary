
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

require('./ProfileCard.css');

class ProfileCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username   : "Username",
      email      : "Email@Email.com",
      pictureURL : null,
    };

    this.setState({
      username   : props.displayName,
      email      : props.email,
      pictureURL : props.pictureURL,
    });
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container">
        {this.state.username}
      </div>
    );
  };
}

export default ProfileCard;
