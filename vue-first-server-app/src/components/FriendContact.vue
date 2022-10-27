<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite Flags)' : '' }}</h2>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>
<script>
export default {
  // In order for you to use component with different in comming data, one need a props, it where you can declare the property of your component
  //props: ['name', 'phoneNumber', 'email', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      //If you have a nor required, you need to provide a default value. default can also be a function
      required: false,
      default: false,
      /* validator: function (value) {
        return value === '1' || value === '0'
      }, */
    },
  },

  emits: ['toggle-favorite', 'delete'],
  /* emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true
      } else {
        console.warn('ID is missing !!')
        return false
      }
    },
  }, */

  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      //this.friendIsFavorite = !this.friendIsFavorite
      // to use component event externelly triggering event from parent   we use emit
      this.$emit('toggle-favorite', this.id)
    },
    deleteFriend() {
      this.$emit('delete')
    },
  },
}
</script>
