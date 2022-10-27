<template>
  <div>
    <!-- we can call the  component  -->

    <!--  or not supported if you writ it like this <the-header /> -->
    <!-- <TheHeader /> -->
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </course-goals>
     -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- or we can use dynamic component -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'
export default {
  /* This is local component registration */
  components: {
    TheHeader,
    /*  BadgeList,
    UserInfo,
    CourseGoals, */
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    }
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp
    },
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>



<!-- Component Registration & Style
- component can be registerd globally or locally: prefere local registration

- Style can be global or scoped to a component : prefere scroped for most component 

- slots can be used to add a "placeholder" for dynamic HTML code.
  a. You can have multiple slot, named slots are possible,
     default fallbacks can be provided. 
     scoped slot allow adv. use-cases 

Daynamic Component 

- Components can be swapped dynamically via the built-in "component"component.<template>
- Component caching can be added via the "keep-alive" component  
- consider following the official  style guide to keep your code clean and understandable
-->