export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    // addRequest is the mutation we are calling
    context.commit('addRequest', newRequest);
  }
};