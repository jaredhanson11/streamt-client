<template>
  <div id="streams">
    <h1>Streams</h1>
    <VideoGrid :videos="videos" />
  </div>
</template>

<script>
const STREAMS_TEMPLATE = '/streams/{id}'
import VideoCardsMixin from '@/mixins/VideoCardsMixin.js'
import VideoGrid from '@/components/common/VideoGrid.vue'
export default {
  name: 'Streams',
  mixins: [VideoCardsMixin],
  components: { VideoGrid },
  data() {
    return {
      streams: [
        { title: 'Testing 1', timestamp: 1, id: 1 },
        { title: 'Testing 2', timestamp: 3, id: 2 },
        { title: 'Testing 3', timestamp: 4, id: 3 },
        { title: 'Testing 3', timestamp: 4, id: 4 },
        { title: 'Testing 4', timestamp: 5, id: 5 }
      ]
    }
  },
  computed: {
    videos() {
      return this.getVideos(this.streams, STREAMS_TEMPLATE)
    }
  }
}
</script>
