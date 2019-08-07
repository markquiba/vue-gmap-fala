<template>
  <GmapMap
    style="height: 100vh;"
    ref="mapRef"
    :center="{lat: 14.5995, lng: 120.9842}" :zoom="12"
    :options="{
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      disableDefaultUi: false
    }"
  >
  </GmapMap>
</template>

<script>
export default {
  name: 'GoogleMap'
}
</script>

<style scoped>

</style>
