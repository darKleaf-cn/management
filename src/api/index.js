import axios from 'axios';
import router from '@/router/index';
import {
  getStore
} from '@/util/storage';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';
axios.defaults.baseURL = process.env.VUE_APP_URL;

// 请求之前添加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = getStore('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 验证token是否过期
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else if (response.status === 401) {
      router.push({
        path: '/login'
      });
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
};
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
};
