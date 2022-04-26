import axios from 'axios';

const setLogin = (body) => {
    return axios.post("http://localhost:8080/authenticate", body);
}

export default setLogin;