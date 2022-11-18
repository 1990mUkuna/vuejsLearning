export default {
  registerCoach(context, data) {
    // construct coachData as new object
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
