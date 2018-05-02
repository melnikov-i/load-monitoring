import axios from 'axios';

const sendRequestToAPI = axios.create({
  baseURL: 'http://dev.monyze.ru',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
});

export default sendRequestToAPI;
