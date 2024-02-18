import axios from "./axios";

const AuthService = {
  register(user) {
    return axios.post('/users', {user: user})
  },
  login(user) {
    return axios.post('/users/login', {user: user})
  },
  user(user) {
    return axios.get('/user')
  }
};

export default AuthService