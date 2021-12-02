import Mock from 'mockjs'; // 引入mockjs
import { commodityQueryList } from './commodity';
import { catalogQueryList } from './catalog';

Mock.setup({
  timeout: '300-600'
})

Mock.mock(/\/commodity\/queryList/, 'get', commodityQueryList);

Mock.mock(/\/catalog\/queryList/, 'get', catalogQueryList);

export default Mock;