import Mock from 'mockjs'; // 引入mockjs
import { commodityQueryList } from './commodity';
import { catalogQueryList } from './catalog';
import { register, login } from './user';

Mock.setup({
  timeout: '300-600'
})

// 商品相关
Mock.mock(/\/commodity\/queryList/, 'get', commodityQueryList);

// 类目相关
Mock.mock(/\/catalog\/queryList/, 'get', catalogQueryList);

// 用户相关
Mock.mock(/\/user\/register/, 'post', register);
Mock.mock(/\/user\/login/, 'post', login);

export default Mock;