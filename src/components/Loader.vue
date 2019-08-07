<template>
  <div v-if="this.$store.state.loader">
    <div class="spinner-grow spinner-grow-sm text-dark mx-2" />
    <div class="spinner-grow spinner-grow-sm text-secondary mx-2" />
    <div class="spinner-grow spinner-grow-sm text-info mx-2" />
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>
