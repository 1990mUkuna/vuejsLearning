export default {
  // every getter is a methods
  userIsAuthenticated(state) {
    return state.isLoggedIn;
  },
};