export default {
    setUser(state, payload) {
        // we are storing our token here
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
