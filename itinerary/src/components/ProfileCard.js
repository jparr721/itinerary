import React, { Component } from 'react';

// Material UI
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

require('./ProfileCard.css');

class ProfileCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username   : "Username",
      email      : "Email@Email.com",
      pictureURL : null,
      locationActive: true,
    };

    this.setState({
      username   : this.props.username,
      email      : this.props.email,
      pictureURL : this.props.photoURL,
      locationActive: true,
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
        <FormControlLabel
          control={
            <Switch
              checked={this.state.locationActive}
              onChange={(event, checked) => this.setState({ locationActive: checked })}
            />
          }
          label="Enable Location Services?"
        />

      </div>
    );
  };
}

export default ProfileCard;
