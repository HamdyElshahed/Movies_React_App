import axios from "axios";
const axiosconfig = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default axiosconfig;