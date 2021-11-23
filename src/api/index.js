import axios from 'axios';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded';
axios.defaults.baseURL = process.env.VUE_APP_URL;
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
