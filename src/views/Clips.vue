<template>
  <div id="clips">
    <h1>Clips</h1>
    <VideoGrid :videos="videos" />
  </div>
</template>

<script>
const CLIPS_TEMPLATE = '/clips/{id}'
import VideoCardsMixin from '@/mixins/VideoCardsMixin.js'
import VideoGrid from '@/components/common/VideoGrid.vue'
export default {
  name: 'Clips',
  mixins: [VideoCardsMixin],
  components: { VideoGrid },
  data() {
    return {
      clips: [
        { title: 'Testing 1', timestamp: 1, id: 1 },
        { title: 'Testing 2', timestamp: 3, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 3', timestamp: 4, id: 1 },
        { title: 'Testing 4', timestamp: 5, id: 1 }
      ]
    }
  },
  computed: {
    videos() {
      return this.getVideos(this.clips, CLIPS_TEMPLATE)
    }
  }
}
</script>
