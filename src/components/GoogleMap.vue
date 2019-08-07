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
    <div v-if="path_coords.length > 0">
      <GmapInfoWindow :position="origin_coords">
        Starting Location
      </GmapInfoWindow>
      <GmapInfoWindow :position="destination_coords">
        Drop-off Point
      </GmapInfoWindow>
      <GmapPolyline :path="path_coords" />
    </div>
  </GmapMap>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'GoogleMap',
  computed: {
    ...mapState([
      'path_coords'
    ]),
    ...mapGetters([
      'origin_coords',
      'destination_coords'
    ])
  }
}
</script>

<style scoped>

</style>
