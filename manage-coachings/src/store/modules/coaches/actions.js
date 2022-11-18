import axios from 'axios';
export default {
  /* async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  }, */
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const token = context.rootGetters.token;
    console.log('*******token:', token);
    try {
      const { data } = await axios({
        method: 'put',
        url: `https://coach-788dd-default-rtdb.firebaseio.com/coaches/${userId}.json`,
        headers: token,
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

  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://coach-788dd-default-rtdb.firebaseio.com/coaches.json`
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

    // Commuting all my mutation
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
