import axios from "axios";
import { REACT_APP_BACKEND_API } from "./config";

const apiService = axios.create({
  baseURL: REACT_APP_BACKEND_API,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", { error });
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response.data);
    return response.data;
  },
  function (error) {
    console.log("RESPONSE ERROR", error.response);
    const message = error.response?.data?.message || "Unknown Error";
    return Promise.reject({ message });
  }
);

export default apiService;