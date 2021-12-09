// import Mock from 'mockjs';
import {
  JSEncrypt
} from 'jsencrypt';
import {
  privateKey
} from '@/util/publicKey';

function decrypt(password) {
  const decryptor = new JSEncrypt();
  decryptor.setPrivateKey(privateKey);
  return decryptor.decrypt(password);
}

export const user = {
  username: '',
  password: '',
  Authorization: ''
}

export function register(option) {
  const {
    username,
    password
  } = JSON.parse(option.body);
  user.username = username;
  user.password = decrypt(password);
  return {
    code: 200,
    message: 'success',
    result: {

    }
  };
}

export function login(option) {
  let {
    username,
    password
  } = JSON.parse(option.body);
  password = decrypt(password);
  if (username === user.username && password === user.password) {
    user.Authorization = new Date().getTime();
    return {
      code: 200,
      message: 'success',
      result: {
        token: user.Authorization
      }
    };
  } else {
    return {
      code: 404,
      message: '用户名密码不正确',
      result: {

      }
    }
  }
}
