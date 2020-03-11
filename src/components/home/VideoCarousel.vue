<template>
  <b-row class="w-100 overflow-auto flex-nowrap">
    <VideoCard
      v-for="(stream, idx) in videos"
      :key="idx"
      :title="stream.title"
      class="w-25"
    />
  </b-row>
</template>

<script>
import VideoCard from '@/components/common/VideoCard.vue'
export default {
  name: 'VideoCarousel',
  components: { VideoCard },
  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}
</script>
