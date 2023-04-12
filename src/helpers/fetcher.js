import axios from 'axios';
import { API_URL, TOKEN_NAME } from './const.js';

const token = localStorage.getItem(TOKEN_NAME);
const basicConfig = {
  baseURL: API_URL
}

export const fetcher = (path) => {
  return axios.get(path, {
    ...basicConfig,
  }).then((response) => {
    return response.data;
  });
}

export const _axios = axios.create({
  baseURL: API_URL,
  headers: {
    "Authorization": token ? `Bearer ${token}` : "",
    "Content-Type": "application/json"
  }
})