import axios from 'axios'

const BASE_API_URL = 'http://localhost:8080'
const AUTH_API_URL = `${BASE_API_URL}/authenticate`

class DataService {
   checkAuthorization() {
        return axios.get(`${AUTH_API_URL}`);
    }

    checkbaseResponse() {
        return axios.get(`${BASE_API_URL}`+"/response");
    }
}
export default new DataService()