import { getStore } from '@/util/storage';
// import Base64 from '@/util/base64';
import { decode } from 'js-base64';

const user = getStore('user') ? JSON.parse(decode(getStore('user'))) : {};
const state = {
	userId: user.userId ? user.userId : '',
  username: user.username ? user.username : '',
	userImage: user.userImage ? user.userImage : '',
	token: user.token ? user.token : ''
};

export default state;
