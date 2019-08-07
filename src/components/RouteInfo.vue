<template>
  <div v-if="total_distance && total_time">
    <h6><strong>Total Distance: </strong> {{ total_distance }}</h6>
    <h6><strong>Total Time: </strong> {{ total_time }}</h6>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RouteInfo',
  computed: {
    ...mapState(['total_distance', 'total_time'])
  }
}
</script>
