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
    message: 'success'
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
      data: {
        userId: new Date().getTime(),
        username,
        userImage: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%A4%B4%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=304846655,1860504905&os=242615875,761998483&simid=3403884274,480249765&pn=10&rn=1&di=119460&ln=3762&fr=&fmq=1639450227769_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimg.bq233.com%252Fkanqq%252Fpic%252Fupload%252F2018%252F0807%252F1533622762937587.jpg%26refer%3Dhttp%253A%252F%252Fimg.bq233.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1642042227%26t%3De89b57dd6e94ae76abc406a1607b14c4&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwzLDEsNSwyLDcsOCw2LDQsOQ%3D%3D',
        token: user.Authorization
      }
    };
  } else {
    return {
      code: 404,
      message: '用户名密码不正确'
    }
  }
}
