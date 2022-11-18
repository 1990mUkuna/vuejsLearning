import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetter from './getters.js';
// A way to split store into module, module are merge into the main store
export default {
  namespaced: true,
  // state inside module is not global
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetter,
};
