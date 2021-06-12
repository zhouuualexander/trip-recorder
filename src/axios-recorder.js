import axios from "axios";
const instance = axios.create(
    {
        baseURL: 'https://trip-recorder-ce49c-default-rtdb.firebaseio.com/'
    }
);

export default instance;