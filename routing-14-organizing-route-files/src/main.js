import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App);

app.use(router);

app.mount('#app');

/* 
We learn how to register a route :
{ path: '/', redirect: '/teams' },

We learn 
1. nested route with children 
2. dynamic path segment
3. passing route parameters as props
4. Navigation guard
5.scroll behavier

We learn how to 

Navigate with router link 

<router-link to="/teams">Teams</router-link>

OR

Programaticaly with the dolar sign property in a methods

confirmInput() {
      // do something

      // pushing the user to another screen  programatic navigation
      this.$router.push('/teams');
      //there is more methods on the router
      //this.$router.back('');
      //this.$router.forward('');
    },

  computed properties enable you to create a property that can be 
  used to modify, manipulate, and display data within your 
  components in a readable and efficient manner

  computed: {
    teamMembersLink() {
      // return '/teams/' + this.id + '?sort=asc';
      return {
        name: 'team-members',
        params: { teamId: this.id },
        query: { sort: 'asc' },
      };
      // this.$router.push({ name: 'team-members', params: { teamId: this.id } });
    },
  },

*/
