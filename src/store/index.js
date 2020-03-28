import Vue from "vue";
import Vuex from "vuex";
// import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    // activeColor: {colorText: "yellow", colorCode: "#FFF59D", description: "（黄）新挑戦"}
    activeColor: {}
  },
  getters: {
    user: state => state.user,
    uid: state => state.user ? state.user.uid : null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user;
    },
    setColor(state,color) {
      state.activeColor = color;
    }
  },
  actions: {
    setCurrentUser({ commit }, user) {
      commit("setCurrentUser", user);
    },
  },
  modules: {}
});
