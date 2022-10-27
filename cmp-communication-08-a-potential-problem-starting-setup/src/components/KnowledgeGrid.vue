<template>
  <ul>
    <!-- topics 
    @select-topic="$emit('select-topic', $event)"
    -->
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  /* props: ['topics'],
   we will use inject the inject work together with provide
   inject it similer to props  
   we will inject the topics key that we have set in App.vue inside provider 
   Note: You can only inject what has been provide on a high level like parent component or encester component file App.vue
   */
  inject: ['topics'],
  //emits: ['select-topic'],
};
</script>
