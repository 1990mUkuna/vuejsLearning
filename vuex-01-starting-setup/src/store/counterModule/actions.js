export default {
  increment(context) {
    // this contect can do alot in here
    setTimeout(function () {
      context.commit('increment');
    });
  },
  increase(context, payload) {
    // this contect can do alot in here
    console.log();
    context.commit('increment', payload);
  },
};
