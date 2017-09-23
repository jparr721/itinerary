import axios from 'axios';

class Request {

    constructor() {
        this.baseUrl = "http://localhost:8080/";
    }

    get(url) {
        return axios.get(this.baseUrl + url);
    }

    post(url, body) {
        return axios.post(this.baseUrl + url, body);
    }

}

export default Request;