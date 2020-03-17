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
    <VideoCarousel :videos="clips" />
    <span id="section-header">
      <h2>Highlights</h2>
      <router-link :to="highlightsRoute">See all</router-link>
    </span>
    <VideoCarousel :videos="highlights" />
  </div>
</template>

<script>
import VideoCarousel from '@/components/home/VideoCarousel.vue'
import { getRoute } from '@/router'
import VideoCardMixin from '@/mixins/VideoCardMixin.js'
export default {
  name: 'Home',
  components: { VideoCarousel },
  mixins: [VideoCardMixin],
  computed: {
    streamsRoute() {
      return getRoute('streams')
    },
    clipsRoute() {
      return getRoute('clips')
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
