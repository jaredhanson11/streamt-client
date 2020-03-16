<template>
  <div id="highlights">
    <h1>Highlights</h1>
    <VideoGrid :videos="videos" hrefTemplate="/hightlights/{id}" />
  </div>
</template>

<script>
import VideoGrid from '@/components/common/VideoGrid.vue'
const DEFAULT_CARD = {
  title: 'No highlights created yet',
  id: 0
}
export default {
  name: 'Highlights',
  components: { VideoGrid },
  computed: {
    videos() {
      if (Object.values(this.$store.getters.highlights).length) {
        return Object.values(this.$store.getters.highlights)
      }
      return [DEFAULT_CARD]
    }
  },
  mounted() {
    this.$store.dispatch('getHome')
  }
}
</script>
