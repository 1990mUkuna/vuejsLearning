<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!--  A dirty aproach to pass id inside router link 
     <router-link :to='t/teams/' + id>View Members</router-link>
  
  -->

    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],

  /* computed properties enable you to create a property that can be 
  used to modify, manipulate, and display data within your 
  components in a readable and efficient manner */
  computed: {
    teamMembersLink() {
      // return '/teams/' + this.id + '?sort=asc';
      return {
        name: 'team-members',
        params: { teamId: this.id },
        query: { sort: 'asc' },
      };
      // this.$router.push({ name: 'team-members', params: { teamId: this.id } });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
