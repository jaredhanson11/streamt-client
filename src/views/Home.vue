<template>
  <div class="home">
    <span id="section-header">
      <h2>Streams</h2>
      <router-link :to="streamsRoute">See all</router-link>
    </span>
    <VideoCarousel :videos="streams" />
    <span id="section-header">
      <h2>Clips</h2>
      <router-link :to="clipsRoute">See all</router-link>
    </span>
    <VideoCarousel :videos="streams" />
    <span id="section-header">
      <h2>Highlights</h2>
      <router-link :to="highlightsRoute">See all</router-link>
    </span>
    <VideoCarousel :videos="streams" />
  </div>
</template>

<script>
import VideoCarousel from '@/components/home/VideoCarousel.vue'
import { getRoute } from '@/router'
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
    streamsRoute() {
      return getRoute('streams')
    },
    clips() {
      if (Object.values(this.$store.getters.clips).length) {
        return Object.values(this.$store.getters.clips)
      }
      return [DEFAULT_CARD]
    },
    clipsRoute() {
      return getRoute('clips')
    },
    highlights() {
      if (Object.values(this.$store.getters.highlights).length) {
        return Object.values(this.$store.getters.highlights)
      }
      return [DEFAULT_CARD]
    },
    highlightsRoute() {
      return getRoute('highlights')
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

#section-header > h2 {
  display: inline;
}
</style>
