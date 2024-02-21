import { createStore } from "vuex";
import auth from "@/modules/auth";
import article from "@/modules/article";
import articleControl from "@/modules/article-control";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, article, articleControl },
});

export default store;