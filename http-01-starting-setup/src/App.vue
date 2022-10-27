<template>
 <!-- because we remove the emit survey-submit in learning suyrvey component @survey-submit="storeSurvey" -->
  <learning-survey ></learning-survey>
  <!--  Not longer fetching data from local db:results="savedSurveyResults" -->
  <user-experiences ></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  /* data() {
    return {
      savedSurveyResults: [],
    };
  }, */
  /* methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },
  }, */
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