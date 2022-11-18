export default {
  increment(state) {
    // not really a good aproach better use action to talk to mutation, bcuz action can handle await async
    // this is an alternative instead of using await you must use timeout as await is note recomend inside mutation
    /* setTimeout(function () {
        state.counter = state.counter + 2;
      }); */
    state.counter = state.counter + 2;
  },
  // This mutation will hold a payload
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
