export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    // check if we authenticate !! convert to a tru boolean
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};