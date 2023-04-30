import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'en'
  },
  mutations: {
    SET_LANGUAGE(state, lng) {
      state.language = lng;
    }
  },
  actions: {
    setLanguage({ commit }, lng) {
      commit('SET_LANGUAGE', lng)
    }
  }
})
