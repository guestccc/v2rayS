import axios from 'axios';
import pkg from '@/../package.json';

import { message } from 'ant-design-vue';

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
    if (!error.response) message.error('Network Error');
    switch (error.response.status) {
      case 200:
        console.log('不存在200');
        break;
      default:
        message.error(error.response.data.msg);
    }
    return Promise.reject(error);
  },
);

export default service;
