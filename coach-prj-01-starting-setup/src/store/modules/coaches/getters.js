export default {
  // This getter are loading state
  coaches(state) {
    // Accessing the state data coaches undex coaches/index.js
    return state.coaches;
  },

  // This getter will chech if we already wave coaches
  hasCoaches(state) {
    // Accessing the state data coaches undex coaches/index.js
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    // some is a build in methods will retun true
    // this will return at least one coach that as userId for our userId which mean we are a coach already
    return coaches.some((coach) => coach.id === userId);
  },
};
