const app = Vue.createApp({
  // data take
  data() {
    //this  will always return an object
    return {
      courseGoalA: "Finish the vue js course ",
      courseGoalB: "<h2>Finish the vue js Master class course </h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  // methods takes an handfull of function in anothe word methods
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
