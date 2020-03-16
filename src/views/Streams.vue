<template>
  <div id="streams">
    <h1>Streams</h1>
    <VideoGrid :videos="videos" />
  </div>
</template>

<script>
const DEFAULT_CARD = {
  title: 'No streams added yet',
  id: 0
}
import VideoGrid from '@/components/common/VideoGrid.vue'
export default {
  name: 'Streams',
  components: { VideoGrid },
  computed: {
    videos() {
      if (Object.values(this.$store.getters.streams).length) {
        return Object.values(this.$store.getters.streams)
      }
      return [DEFAULT_CARD]
    }
  },
  mounted() {
    this.$store.dispatch('getHome')
  }
}
</script>
