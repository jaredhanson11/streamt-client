<template>
  <div id="highlights">
    <h1>Highlights</h1>
    <VideoGrid :videos="videos" hrefTemplate="/hightlights/{id}" />
  </div>
</template>

<script>
const HIGHLIGHTS_TEMPLATE = '/highlights/{id}'
import VideoCardsMixin from '@/mixins/VideoCardsMixin.js'
import VideoGrid from '@/components/common/VideoGrid.vue'
export default {
  name: 'Highlights',
  mixins: [VideoCardsMixin],
  components: { VideoGrid },
  data() {
    return {
      highlights: [
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
      return this.getVideos(this.highlights, HIGHLIGHTS_TEMPLATE)
    }
  }
}
</script>
