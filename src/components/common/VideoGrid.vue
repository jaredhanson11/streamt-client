<template>
  <div class="w-100 row">
    <VideoCard
      v-for="(video, idx) in videos"
      :key="idx"
      class="w-25"
      :name="video.name"
      :href="video.href"
      :id="video.id"
    />
  </div>
</template>

<script>
import VideoCard from '@/components/common/VideoCard.vue'
const ROW_SIZE = 4
export default {
  name: 'VideoGrid',
  components: { VideoCard },
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  computed: {
    rows() {
      var rows = []
      const n_vids = this.videos.length
      const n_rows = n_vids / ROW_SIZE
      var start = 0
      var end = ROW_SIZE
      while (end < n_vids) {
        rows.push(this.videos.slice(start, end))
        start = end
        end = end + ROW_SIZE
      }
      // Last row
      rows.push(this.videos.slice(start))
      return rows
    }
  }
}
</script>
