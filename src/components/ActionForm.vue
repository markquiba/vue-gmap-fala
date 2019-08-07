<template>
  <form @submit.prevent="submit">
    <TextInput :label="'Starting Location'" :inputName="'origin'" />
    <TextInput :label="'Drop-off Point'" :inputName="'destination'" />
    <div class="map-response-message">
      <Loader />
      <ErrorMessage />
      <RouteInfo />
    </div>
    <div class="map-action-buttons py-5">
      <button class="btn mx-1 btn-primary shadow" type="submit">{{ this.error_message ? 'Re-Submit' : 'Submit' }}</button>
      <button @click="resetAll" class="btn mx-1 btn-secondary shadow" type="button">Reset</button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import Loader from './Loader.vue'
import ErrorMessage from './ErrorMessage.vue'
import RouteInfo from './RouteInfo.vue'
import TextInput from './TextInput'

export default {
  name: 'FormSearch',
  components: {
    Loader,
    ErrorMessage,
    RouteInfo,
    TextInput
  },
  computed: {
    ...mapState(['error_message'])
  },
  methods: {
    submit () {
      this.resetResponses()
      this.$store.dispatch('FETCH_TOKEN')
    },
    resetAll () {
      this.resetResponses()
      this.resetInputs()
    },
    resetResponses () {
      this.$store.commit('updateInfo', { textInfo: 'distance', payload: null })
      this.$store.commit('updateInfo', { textInfo: 'time', payload: null })
      this.$store.commit('updatePathCoordinates', [])
      this.$store.commit('updateErrorMessage', null)
    },
    resetInputs () {
      this.$store.commit('clearInput', 'origin')
      this.$store.commit('clearInput', 'destination')
    }
  }
}
</script>

<style scoped>
.map-response-message {
  margin-top: 40vh;
}
</style>
