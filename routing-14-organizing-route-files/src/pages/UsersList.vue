<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      // this change property boolean will handle when user want to leave
      // this page without saving
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something

      // pushing the user to another screen  programatic navigation
      this.$router.push('/teams');
      //there is more methods on the router
      //this.$router.back('');
      //this.$router.forward('');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },

  // Those are different Navigation guard
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  // this guard will be call before other guard are call
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );

      //now this next can be used to confirm the navigation or to only some time confirm it
      next(userWantsToLeave);
    }
  },
  // we can call umount and run a code when this comonent is left
  // this will be executed whenever we leave this page
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
