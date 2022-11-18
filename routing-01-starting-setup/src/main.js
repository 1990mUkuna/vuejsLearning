import { createApp } from 'vue';
//import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
/* import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue'; */

/* const router = createRouter({
  history: createWebHistory(),
  router: [
      { path: '/teams', component: TeamsList }, // this will load ourdomain.com/teams => TeamsList
    { path: '/users', component: UsersList }, 
  ],
}); */

const app = createApp(App);
/* use is a build in methods that alows us to connect with a third party library */
//app.use(router);
app.mount('#app');
