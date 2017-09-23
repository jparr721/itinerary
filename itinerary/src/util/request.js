import axios from 'axios';

class Request {

    constructor() {
        //this.baseUrl = "http://localhost:8080/";
        this.baseUrl = "http://travelapi-env.2xnegqgnvd.us-east-2.elasticbeanstalk.com/";
    }

    get(url) {
        return axios.get(this.baseUrl + url);
    }

    post(url, body) {
        return axios.post(this.baseUrl + url, body);
    }

}

export default Request;
