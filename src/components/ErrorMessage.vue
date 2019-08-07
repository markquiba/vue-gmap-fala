<template>
  <div v-if="error_message">
    <h6 class="text-danger">{{ error_message }}</h6>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ErrorMessage',
  computed: {
    ...mapState(['error_message'])
  }
}
</script>
