import axios from "axios";

const ApiRequest = {
    get: (endpoint) => {
        const url = `https://backend-bangladesh-university.onrender.com/${endpoint}`;
        const headers = {
            'Content-Type': 'application/json'
        }


        const options = {
            method:'GET',
            url: `${url}`,
            headers,
        };

        return axios(options)?.
        then((response) => {
            return response;
        })
            .catch((error) => {
                return error?.response;
            })
    },
    post: (endpoint, payload) =>{
        const url = `https://backend-bangladesh-university.onrender.com/${endpoint}`;
        const headers = {
            'Content-Type': 'application/json'
        }


        const options = {
            method:'POST',
            headers,
            url: `${url}`,
            data:payload
        };

        return axios(options)?.
        then((response) => {
            return response;
        })
            .catch((error) => {
                return error?.response;
            })
    }

}


export default ApiRequest;