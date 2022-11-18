import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counterModule/index.js';

const store = createStore({
  // store also have module key where you can merge all your store
  modules: {
    // first give a module an identify that you can merge it with your module
    // number is the name space of counterModule
    numbers: counterModule,
  },
  // the state function can have multiple object state
  state() {
    return {
      isLoggedIn: false,
    };
  },
  // Mutation takes an object and in this object you can define methodes
  /*  A mutation have the logic to update the state
   And we trigger those logic from the comonent  */

  // this methods can be trigger any way in the app
  mutations: rootMutations,
  //Actions takes object :{}
  actions: rootActions,
  // getter takes object :{}
  getters: rootGetters,
});

export default store;
