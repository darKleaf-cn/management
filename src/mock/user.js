// import Mock from 'mockjs';

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
  user.password = password;
  return {
    code: 200,
    message: 'success',
    result: {

    }
  };
}

export function login(option) {
  const {
    username,
    password
  } = JSON.parse(option.body);
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
