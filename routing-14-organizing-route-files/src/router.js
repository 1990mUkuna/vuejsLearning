import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //redirecting a domain to mydomain.com to teams  home page or component
    // you can also use alias to redirect domain
    /* { path: '/', component: TeamsList, alias: '/' }, */
    { path: '/', redirect: '/teams' },

    //this how you use dynamic path withn id attached
    /*  { path: '/teams/:teamId',  }, */

    // 1. Teams Path:
    {
      name: 'teams',
      path: '/teams',
      // meta can be use in conjunction with navigation guard
      meta: { needsAuth: true },
      // to access one component
      //component : TeamsList,

      // and For Multiple child component
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        // you can have multiple child route
        {
          name: 'team-members',
          //dynamic path segment ' path: ':teamId',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList

    // 1. User Path:
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      // When you want to protect individual route
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },

    // 1. Catch Path: to handle wrong link
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  // this will handle the scrolling behavier
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
//Auth guard:  before each navigation this fuction will be call
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    // next alows the navigation
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  // next();
});
// This will only run once the navigation have been confirm
router.afterEach(function (to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
