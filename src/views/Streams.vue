<template>
  <div id="streams">
    <h1>Streams</h1>
    <VideoGrid :videos="streams" />
  </div>
</template>

<script>
import VideoGrid from '@/components/common/VideoGrid.vue'
import VideoCardMixin from '@/mixins/VideoCardMixin.js'
export default {
  name: 'Streams',
  components: { VideoGrid },
  mixins: [VideoCardMixin],
  mounted() {
    this.$store.dispatch('getHome')
  }
}
</script>
