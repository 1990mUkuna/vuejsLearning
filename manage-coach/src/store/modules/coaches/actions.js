import axios from 'axios';
export default {
  data() {
    return {
      resultsCoach: [],
    };
  },
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    try {
      const { data } = await axios({
        method: 'put',
        url: `https://coach-788dd-default-rtdb.firebaseio.com/coaches/${userId}.json`,
        data: coachData,
      });

      console.log(data);
    } catch (err) {
      if (err.response.status === 404) {
        console.log('Resource could not be found!');
      } else {
        console.log(err.message);
      }
    }
    //context.commit('registerCoach', coachData);
    context.commit('registerCoach', {
      ...coachData,
      id: userId, // addding id on local state in vuex
    });
  },
  // after creating this methods, the methods need to be dispatch in coach list

  async loadCoaches(context) {
    this.isLoading = true;
    axios
      .get('https://coach-788dd-default-rtdb.firebaseio.com/coaches.json')
      .then(
        function (response) {
          const coachesResult = (this.resultsCoach = response.data);
          context.commit('setCoaches', coachesResult);
        }.bind(this)
      );
  },

  async loadCoachess(context) {
    const response = await fetch(
      'https://coach-788dd-default-rtdb.firebaseio.com/coaches.json'
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
