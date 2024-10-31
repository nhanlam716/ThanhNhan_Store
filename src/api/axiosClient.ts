import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});

axiosClient.interceptors.request.use(
  function (config) {
    const request: any = {
      ...config,
    };

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
