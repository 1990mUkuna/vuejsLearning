<template>
  <button @click="inc">Inc, Change ++ 2</button>
  <button @click="increase({ value: 11 })">11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    addOne() {
      // we are triggering a mutation here by calling a commit methods where we will pass the mutation side object name as a string
      //this.$store.dispatch('increment', 2);
    },
    // we can also map multiple actions inside this map
    //...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
