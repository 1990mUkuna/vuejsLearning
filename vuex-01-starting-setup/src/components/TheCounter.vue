<template>
  <h3>{{ counter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    //Computed properties are another powerful feature from Vue that allows us to transform or perform calculations on our data and then easily reuse the result as an up-to-date
    /*  counter() {
       
          here we are accesing directly the store state
          return this.$store.state.counter * 2;

          best practice will be fist $store the call the getters and the getterss methods
          you just point it to the finalcounter methods that was initialise in main class inside getters property

       
      return this.$store.getters.finalCounter;
    }, */
    /* One alternative instead of drilling on a getter like above example,
    special if you are returning multiple getter, better to use mapGetters
    you can use mapGetters() 
    */

    ...mapGetters('numbers'['finalCounter']),
  },
};
</script>
