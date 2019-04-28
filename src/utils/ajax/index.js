import axios from 'axios';
import pkg from '@/../package.json';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 12000,
});

service.interceptors.request.use(
  (config) => {
    Object.assign(config, {
      version: pkg.version,
    });
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  response => response,
  (error) => {
    console.log(`err${error}`);// for debug
    return Promise.reject(error);
  },
);

export default service;
