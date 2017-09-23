import React, { Component } from 'react';
import Request from '../util/request';

require("./Header.css");

class SavedTrip extends Component {

    constructor(props) {
        super(props);

        this.request = new Request();

        this.state = {
            id: 'lasdfjgalksdjfalsdkfj_My_Vacation',
            name: 'My Vacation',
            type: 'vacation',
            start_date: '9/23/2017',
            end_date: '5/7/2021',
            price: '9',
            image_url: 'https://images.cbgreatlakes.com/Images/69246/6ec50742-8651-4f4a-84d5-8e68955c891a.jpg'
        };

        if (this.props.id) {
            this.request.get('trips/' + this.props.id).then((data) => {
                 this.setState(data);
            }, (err) => {
               console.log(err);
            });
        }
    }

    render () {
        return (
            <div>
                <span>Trip: {this.state.id}</span>
                <span>Name: {this.state.name}</span>
                <span>Trip Type: {this.state.type}</span>
                <span>Start: {this.state.start_date}</span>
                <span>End: {this.state.end_date}</span>
                <span>Price: {this.state.price}</span>
            </div>
        );
    }
}

export default SavedTrip;
