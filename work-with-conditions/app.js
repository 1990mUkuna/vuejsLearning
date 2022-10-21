const app = Vue.createApp({
  data() {
    return {
      enterdGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterdGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
