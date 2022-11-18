import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  // we going to use this getter inside coach module actions id: context.rootGetters.userId,
  getters: {
    userID(state) {
      return state.userId;
    },
  },
});

export default store;
