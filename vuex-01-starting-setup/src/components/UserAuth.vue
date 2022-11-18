<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>
<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    //this computed will make a call to the getters
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
