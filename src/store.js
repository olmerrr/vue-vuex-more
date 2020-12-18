import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isDropDownVisible: false,
  },
  mutations: {
    CHANGE_DROP_DOWN:(state) => {
      state.isDropDownVisible = !state.isDropDownVisible
    }
  },
  actions: {
    TOGGLE_DROP_DOWN({commit}) {
      commit('CHANGE_DROP_DOWN')
    }
  },
  getters: {
    DROP_DOWN_STATE(state) {
      return state.isDropDownVisible;
    },
  },


});

export default store;