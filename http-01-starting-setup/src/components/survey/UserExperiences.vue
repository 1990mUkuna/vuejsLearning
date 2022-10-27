<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading......</p>
      <p v-else-if="!isLoading && (!results || results.length > 0)">
        No stored experiences found. Strt adding some survey result
      </p>
      <!-- <ul v-if="!isLoading"> you can use v-else instead-->
      <!-- <ul v-else-if="!isLoading && results && results.length > 0"> -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';
export default {
  //props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      axios
        .get(
          'https://vue-http-demo-e1ca4-default-rtdb.firebaseio.com/surveys.json'
        )
        .then(
          function (response) {
            this.isLoading = false;
            this.results = response.data;
          }.bind(this)
        );
    },
  },
  /* We need to add the mounted() hook of this component to call the api when we refresh the page  */

  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
