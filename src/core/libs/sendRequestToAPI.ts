import axios, { AxiosInstance } from 'axios';

export const sendRequestToAPI: AxiosInstance = axios.create({
  baseURL: 'http://dev.monyze.ru',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
});
