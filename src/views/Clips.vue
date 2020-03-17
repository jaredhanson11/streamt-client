<template>
  <div id="clips">
    <h1>Clips</h1>
    <VideoGrid :videos="clips" />
  </div>
</template>

<script>
import VideoGrid from '@/components/common/VideoGrid.vue'
import VideoCardMixin from '@/mixins/VideoCardMixin.js'
export default {
  name: 'Clips',
  components: { VideoGrid },
  mixins: [VideoCardMixin],
  mounted() {
    this.$store.dispatch('getHome')
  }
}
</script>
