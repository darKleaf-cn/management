import Mock from 'mockjs';
const Random = Mock.Random;
let list = [];

export function commodityQueryList(option) {
  const page = 1;
  const size = 10;
  if (list.length > 0) {
    return {
      code: '200',
      message: 'success',
      result: {
        total: list.length,
        data: list.slice((page - 1) * size, page * size)
      }
    }
  }
  const data = Mock.mock({
    'list|30-50': [{
      'commodityId|1': '@id',
      'commodityName|1': '@ctitle',
      'commodityStatus|1': '@boolean',
      'commodityType|1': [
        '服饰',
        '电子产品',
        '零食',
        '书籍'
      ],
      'commodityPrice|10-500': 10,
      'commodityImage|1': Random.image('200x300'),
      'commodityDescribe|1': '@cparagraph'
    }]
  });
  list = data.list;
  return {
    code: '200',
    message: 'success',
    result: {
      total: list.length,
      data: list.slice((page - 1) * size, page * size)
    }
  };
}
