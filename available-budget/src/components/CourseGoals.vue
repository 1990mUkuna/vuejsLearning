<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- We can use a slot here if we want to access those value on another
      external component instead of {{ goal }} -->
      <!-- {{ goal }} -->
      <!-- scope slote helps you passing the data to component you want to populate
      -->
      <slot :item="goal" another-prop="....."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn vue'],
    }
  },
}
</script>
