<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Increase by 10</button>
    <change-counter></change-counter>
  </base-container>

  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    //this computed will make a call to the getters
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      /*   we are triggering a mutation here by calling a commit methods where we will pass the mutation side object name as a string
      this.$store.commit('increase', { value: 10 });
        there's two way of commiting this aproach

        ~ Side Note: Now becouse we have our action property, we are going to refactor
        instead of talking directly to Mutation we will dispatch the action 
        
        this.$store.commit({
        type: 'increase',
        value: 10,
      });
        
    */

      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
