<template>
  <div id="streams">
    <h1>Streams</h1>
    <VideoGrid :videos="streams" />
  </div>
</template>

<script>
import VideoGrid from '@/components/common/VideoGrid.vue'
export default {
  name: 'Streams',
  components: { VideoGrid },
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
