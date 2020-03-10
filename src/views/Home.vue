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
export default {
  name: 'Home',
  components: { VideoCarousel },
  data() {
    return {
      streams: [
        { title: 'Testing 1', timestamp: 1 },
        { title: 'Testing 2', timestamp: 3 },
        { title: 'Testing 3', timestamp: 4 },
        { title: 'Testing 3', timestamp: 4 },
        { title: 'Testing 4', timestamp: 5 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  font-size: 100em;
}
</style>
