<template>
  <section>
    <base-card>
      <h2>
        Register as a coach now !
      </h2>
      <!-- @save-data="saveData" saveData is name of the object we emit
         from form component pour to acces the object here
       -->
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: { CoachForm },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
