export default {
  login(context) {
    // setAuth is name of our mutation
    context.commit('setAuth', {
      isAuth: true,
    });
  },
  logout(context) {
    context.commit('setAuth', {
      isAuth: false,
    });
  },
};