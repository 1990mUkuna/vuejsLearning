<template>
  <!--  to listen the submit btn we will add @submit and prevent modifier to prevent browser default
 -->
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      // Those data property need to be bind with v-model, to handle event input
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods: {
    submitData() {
      // now emit the customer add-contact to forward all incoming data from input field
      this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredEmail,
        this.enteredPhone,
      )
    },
  },
}
</script>
