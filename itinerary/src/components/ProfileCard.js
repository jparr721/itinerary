
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
      username   : this.props.username,
      email      : this.props.email,
      pictureURL : this.props.photoURL,
    });
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <Avatar className="avatar" src={this.props.photoURL}></Avatar>
          </div>
          <div className="col-sm">
            <div className="profile-container">
              <h3 className="primary-text">{this.props.username}</h3>
              <h3 className="secondary-text">{this.props.email}</h3>
            </div>
          </div>
        </div>

        <hr class="horizontal-rule"/>


      </div>
    );
  };
}

export default ProfileCard;
