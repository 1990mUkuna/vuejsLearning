Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      //Clear input field
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');
// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
// }
// buttonEl.addEventListener('click', addGoal);
