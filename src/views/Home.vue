<template>
  <div class="home">
    <span>
      <h2>Streams</h2>
      <a>See all</a>
    </span>
    <VideoCarousel :videos="streams" />
    <span>
      <h2>Clips</h2>
      <a>See all</a>
    </span>
    <VideoCarousel :videos="streams" />
    <span>
      <h2>Highlights</h2>
      <a>See all</a>
    </span>
    <VideoCarousel :videos="streams" />
  </div>
</template>

<script>
import VideoCarousel from '@/components/home/VideoCarousel.vue'
const DEFAULT_CARD = {
  title: 'No videos added yet',
  id: 0
}
export default {
  name: 'Home',
  components: { VideoCarousel },
  computed: {
    streams() {
      if (Object.values(this.$store.getters.streams).length) {
        return Object.values(this.$store.getters.streams)
      }
      return [DEFAULT_CARD]
    },
    clips() {
      if (Object.values(this.$store.getters.clips).length) {
        return Object.values(this.$store.getters.clips)
      }
      return [DEFAULT_CARD]
    },
    highlights() {
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

<style lang="scss" scoped>
#main {
  font-size: 100em;
}
</style>
