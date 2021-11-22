import Mock from 'mockjs'; // 引入mockjs
const data = {
  Message: '查询成功',
  Code: 1,
  Data: {
    Id: '',
    name: ''
  }
};

Mock.mock(
  /\/commodity\/queryList/,
  'get',
  data
); // 参数分别为请求要拦截的url(项目中请求地址只要 >包含< 了这个参数,就会被拦截，第二个参数是请求方式，第三个参数是请求之后的response数据)

export default Mock;