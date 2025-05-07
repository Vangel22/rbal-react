import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);

    return config;
  },
  (error) => {
    console.log("Request sent:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Request recieved:", response);

    return response;
  },
  (error) => {
    console.log("Response receieved:", error.response?.message | error.message);
    return Promise.reject(error);
  }
);

export const createCancelToken = () => axios.CancelToken.source();
