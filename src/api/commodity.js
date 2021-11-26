import { get, post } from './index';

export const commodityQueryList = params => get('/commodity/queryList', params);
export const commodityDelete = params => post('/commodity/delete', params);
export const commodityUpdate = params => post('/commodity/update', params);