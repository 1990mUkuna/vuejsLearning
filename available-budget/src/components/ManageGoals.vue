<template>
  <div>
    <h2>Manage Goals</h2>

    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Confirm Error</button>
      </error-alert>
    </teleport>
  </div>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    setGoal() {
      const enterdValue = this.$refs.goal.value
      if (enterdValue === '') {
        this.inputIsInvalid = true
      }
    },
    confirmError() {
      this.inputIsInvalid = false
    },
  },
}
</script>
