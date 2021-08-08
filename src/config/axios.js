import axios from 'axios';

//crear un cliente axios para variable de servidor global

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;