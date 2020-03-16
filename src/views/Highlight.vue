<template>
  <div id="highlight">
    <StreamPlayer />
  </div>
</template>

<script>
import StreamPlayer from '@/components/stream/StreamPlayer.vue'
export default {
  name: 'Highlight',
  components: {
    StreamPlayer
  },
  mounted() {
    this.$store.dispatch('getHome')
  }
}
</script>
