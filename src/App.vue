<template>
  <div id="app">
    <div class="row">
      <div class="col-md-4 p-5">
        <ActionForm />
      </div>
      <div class="col-md-8">
        <GoogleMap />
      </div>
    </div>
  </div>
</template>

<script>
import ActionForm from './components/ActionForm'
import GoogleMap from './components/GoogleMap.vue'

export default {
  name: 'app',
  components: {
    ActionForm,
    GoogleMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
