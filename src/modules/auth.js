import { setItem } from "@/helpers/presisteneStorage";
import AuthService from "@/service/auth";
const state = {
  isLoading: false,
};
const mutations = {
  registerStart(state) {
    state.isLoading = true;
  },
  registerSuccess(state) {
    state.isLoading = false;
  },
  registerFailure(state) {
    state.isLoading = false;
  },
};
const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          context.commit("registerSuccess");
          setItem('token',response.data.user.token)
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure");
          reject(error.response.data);
        });
    });
  },
};
export default { state, mutations, actions };
