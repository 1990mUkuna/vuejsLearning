const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "A",
          name: "Mukuna Junior",
          phone: "0719765434",
          email: "mukuna@gmail.com",
        },
        {
          id: "B",
          name: "Bukasa",
          phone: "0719765434",
          email: "bukasa@gmail.com",
        },
      ],
    };
  },
  methods: {},
});
app.component("friend-contact", {
  template: `
   <li>
          <!--  Now you can interpolate your enties -->
          <h2>{{friends.name}}</h2>
          <button @click="toggleDetails()">
            {{detailsAreVisible ? 'Hide': 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li>
              <strong>Phone:</strong>
              {{friends.phone}}
            </li>
            <li>
              <strong>Email:</strong>
              {{friends.email}}
            </li>
          </ul>
        </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friends: {
        id: "A",
        name: "Mukuna Junior",
        phone: "0719765434",
        email: "mukuna@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
