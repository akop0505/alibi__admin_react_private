import axios from 'axios'

const BASE_URL = "http://alibi.lv";

const axiosApiConfig = {
    baseURL: `${BASE_URL}/api`,
    timeout: 30000,
};

export const api = axios.create(axiosApiConfig);


export const setAxiosHeader = () => {
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

if(localStorage.getItem('token')){
    setAxiosHeader();
}
