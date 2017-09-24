import React, { Component } from 'react';

require("./SavedTrip.css");

class SavedTrip extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render () {
        return (
            <div className="row">
                <div className="trip-bg col-12">
                    <a><img className="trip-image" src={this.props.data.image_url} /></a>
                </div>
                <div className="col-12">
                    <h3>{this.props.data.name} <small><span>${this.props.data.price}</span></small></h3>
                </div>
                <div className="col-12">
                    <span>{this.props.data.start_date}</span> - <span>{this.props.data.end_date}</span>
                </div>
            </div>
        );
    }
}

export default SavedTrip;
