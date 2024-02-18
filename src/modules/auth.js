import { setItem } from "@/helpers/presisteneStorage";
import AuthService from "@/service/auth";
import { gettersTypes } from "./types";
const state = {
  isLoading: false,
  user: null,
  errors: null,
  isLoggedIn: null,
};
const getters = {
  [gettersTypes.user]: (state) => {
    return state.user;
  },
  [gettersTypes.isLoggedIn]: (state) => {
    return Boolean(state.isLoggedin);
  },
  [gettersTypes.isAnonymus]: (state) => {
    return state.isLoggedin === false;
  },
};
const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
    state.isLoggedin = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedin = true;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
    state.isLoggedin = false;
  },
  loginStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
    state.isLoggedin = null;
  },
  loginSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedin = true;
  },
  loginFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
    state.isLoggedin = false;
  },
  userStart(state) {
    state.isLoading = true;
  },
  userSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedin = true;
  },
  userFailure(state) {
    state.isLoading = false;
    state.user = null;
    state.isLoggedin = false;
  },
};
const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          context.commit("registerSuccess", response.data.user);
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("loginStart");
      AuthService.login(user)
        .then((response) => {
          context.commit("loginSuccess", response.data.user);
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("loginFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
  getUser(context) {
    return new Promise((resolve) => {
      context.commit("userStart");
      AuthService.user()
        .then((response) => {
          context.commit("userSuccess", response.data.user);
          resolve(response.data.user);
        })
        .catch(() => context.commit("userFailure"));
    });
  },
};
export default { state, mutations, actions, getters };
