<template>
  <div id="highlights">
    <h1>Highlights</h1>
    <VideoGrid :videos="highlights" />
  </div>
</template>

<script>
import VideoGrid from '@/components/common/VideoGrid.vue'
import VideoCardMixin from '@/mixins/VideoCardMixin.js'
export default {
  name: 'Highlights',
  components: { VideoGrid },
  mixins: [VideoCardMixin],
  mounted() {
    this.$store.dispatch('getHome')
  }
}
</script>
