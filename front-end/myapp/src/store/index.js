import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showPopup: false,
    selectedProvince: ''
  },
  mutations: {
    setShowPopup(state, value) {
      state.showPopup = value;
    },
    setSelectedProvince(state, value) {
      state.selectedProvince = value;
    }
  },
  actions: {
    togglePopup({ commit }, value) {
      commit('setShowPopup', value);
    },
    changeProvince({ commit }, value) {
      commit('setSelectedProvince', value);
    }
  }
});
