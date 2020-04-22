import axios from "axios";
import {
  REACT_APP_SERVER_URL,
  REACT_APP_CREDENTIALS,
} from "./../utils/constants";

// This url is used to avoid the CORS issue connecting to the API
const headers = {
  Authorization: `Basic ${REACT_APP_CREDENTIALS}`,
};

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const axiosClient = axios.create({
  baseURL: `${PROXY_URL}${REACT_APP_SERVER_URL}`,
  headers,
});

export default axiosClient;
