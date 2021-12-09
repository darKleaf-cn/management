import * as types from './mutations-types';

const mutations = {
  [types.SET_USERID](state, payload) {
    state.userId = payload;
  },
  [types.SET_USERNAME](state, payload) {
    state.username = payload;
  }
};

export default mutations;
