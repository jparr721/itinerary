import React, { Component } from 'react';

// Material UI
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class ModalStay extends Component {
  render() {
    return (
      <div>
        <h1>Where would you like to stay?</h1>
        <div className="row">
          <div className="col-4">
            <Card className="main-card">
              <Typography type="title" clasName="title">
                Hotels Here
              </Typography>
              <CardContent>
                Hotel Info and Price
              </CardContent>
            </Card>
          </div>
          <div className="col-4">
            <Card className="main-card">
              <Typography type="title" clasName="title">
                Hotels Here
              </Typography>
              <CardContent>
                Hotel Info and Price
              </CardContent>
            </Card>
          </div>
          <div className="col-4">
            <Card className="main-card">
              <Typography type="title" clasName="title">
                Hotels Here
              </Typography>
              <CardContent>
                Hotel Info and Price
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  };
}

export default ModalStay;
