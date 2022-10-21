const app = Vue.createApp({
  //Configutation option data
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
      //firstName: "",
      lastname: "",
    };
  },
  //Configutation option Methods
  methods: {
    outputFullname() {
      if (this.name === "") {
        return " ";
      }
      return this.name + " " + "mukuna";
    },
    setName(event) {
      this.name;
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      //To avoid the page to reload. Event Modifier, ther's another way to handle it via event modifier, in your form component add the . after you vuejs directive ie: v-on:submit.prevent, prevent is a key word modifier that prevent browser to refresh
      // event.preventDefault();
      alert("Form Submited !!!");
      //this.name.push(this.setName);
    },
    increeement(num) {
      this.counter = this.counter + num;
    },
    decreement(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },

  // watch is use to check dynamic value
  // you can also use watch for http request, sending http request if certain data changed 
  // execute the code when something change
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    /*  name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + " king";
      }
    },
    lastname(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = this.name + " " + value;
      }
    }, */
  },
  //Configutation option Computed
  // To calculate some output dynamic use computed
  computed: {
    fullName() {
      if (this.name === "" || this.lastname) {
        return " ";
      }
      return this.name + " " + this.lastname;
    },
  },
});

app.mount("#events");
 
/*   Methods vs Computed vs Watch

  Methods :
  Can be use in the template with event binding or data binding  in the interpollation {{}   }
  Data binding: Methods is executed for every "re-render" cycle of the component
  Also used for events or data that really needs to be re-evaluated all the time
  
  Computed: 
  Can be used for data binding 
  And are only re-evaluated if one of their "used values" change
  Use for data that depends on other data

  Watch:
  Watch's are note directly use on the template but you don't reference there
  but you can watch any property.

  Allows you to run any code in reaction to some changed data 
  ie:send http request etc

  Use for any non-data update you want to make
  */