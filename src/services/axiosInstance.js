import axios from "axios";
import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from "../config.js";

const getHeaders = () => {
  try {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
    if (!token) {
      return {}
    }

    return {
      authorization: `Bearer ${token}`,
    }
  } catch (err) {
    return {}
  }
}

export const _axios = axios.create({
  baseURL: API_URL,
  headers: getHeaders(),
})

export const fetcher = async (path) => {
  const response = await axios.get(path, {
    baseURL: API_URL,
    headers: getHeaders(),
  });
  return response.data;
}