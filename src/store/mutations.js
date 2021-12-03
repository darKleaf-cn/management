import * as types from './mutations-types';

const mutations = {
  [types.SET_USERNAME](state, payload) {
    state.username = payload;
  },
  [types.SET_PASSWORD](state, payload) {
    state.password = payload;
  },
  [types.SET_AUTHORIZATION](state, payload) {
    state.Authorization = payload;
  }
};

export default mutations;
