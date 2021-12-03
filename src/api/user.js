import {
  post
} from './index';

// 用户注册
export const register = params => post('/user/register', params);

// 用户登录
export const login = params => post('/user/login', params);
