<template>
  <div id="clips">
    <h1>Clips</h1>
    <VideoGrid :videos="videos" />
  </div>
</template>

<script>
const CLIPS_TEMPLATE = '/clips/{id}'
import VideoGrid from '@/components/common/VideoGrid.vue'
const DEFAULT_CARD = {
  title: 'No clips added yet',
  id: 0
}
export default {
  name: 'Clips',
  components: { VideoGrid },
  computed: {
    videos() {
      if (Object.values(this.$store.getters.clips).length) {
        return Object.values(this.$store.getters.clips)
      }
      return [DEFAULT_CARD]
    }
  }
}
</script>
