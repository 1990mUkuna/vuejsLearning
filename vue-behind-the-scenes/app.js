const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      /* Accesing user input via ref with key value that we set in index.html tag ie:  <input type="text" ref="userInput", this aproach point the dom object on this input elemement />*/
      this.message = this.$refs.userText.value;
      //console.log(this.$refs.userText);
    },
  },
  //houcks
  // You do add all your hooks lifecycle methods inside the app
  beforeCreate() {
    // this can be use to call api before something or set a timer
    console.log("beforeCreate()");
  },
  created() {
    console.log("Created()");
  },
  beforeMount() {
    console.log(" beforeMount())");
  },

  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});
app.mount("#app");
setTimeout(function () {
  app.unmout();
}, 3000);

const app2 = Vue.createApp({
  /* Athoner way to add template inside app */
  template: `
   <p>{{ favoriteMeal }}</p> 
  `,
  data() {
    return {
      favoriteMeal: "Fish",
    };
  },
});

app2.mount("#app2");
