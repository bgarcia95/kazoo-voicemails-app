import axios from "axios";
import {
  REACT_APP_SERVER_URL,
  REACT_APP_PROXY_URL,
  REACT_APP_CREDENTIALS,
} from "./../utils/constants";

// This url is used to avoid the CORS issue connecting to the API
const headers = {
  Authorization: `Basic ${REACT_APP_CREDENTIALS}`,
};

const axiosClient = axios.create({
  baseURL: `${REACT_APP_PROXY_URL}${REACT_APP_SERVER_URL}`,
  headers,
});

export default axiosClient;
