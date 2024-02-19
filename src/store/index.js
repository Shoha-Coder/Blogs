import { createStore } from "vuex";
import auth from "@/modules/auth";
import article from "@/modules/article";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, article },
});

export default store;