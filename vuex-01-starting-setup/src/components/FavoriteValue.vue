<template>
  <h3>{{ counter }}</h3>
  <p>We do more .....</p>
</template>

<script>
export default {
  computed: {
    //Computed properties are another powerful feature from Vue that allows us to transform or perform calculations on our data and then easily reuse the result as an up-to-date
    counter() {
      // number is the property name of counterModule numbers: counterModule,
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
