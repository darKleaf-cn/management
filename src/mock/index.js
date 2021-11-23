import Mock from 'mockjs'; // 引入mockjs
import { commodityQueryList } from './commodity';

Mock.setup({
  timeout: '300-600'
})

Mock.mock(/\/commodity\/queryList/, 'get', commodityQueryList);

export default Mock;