<template>
  <b-col>
    <VuePlyr :options="options" ref="stream-player">
      <video>
        <source
          src="https://streamt-videos.sfo2.cdn.digitaloceanspaces.com/streams/output.mp4"
          type="video/mp4"
        />
      </video>
    </VuePlyr>
    <b-button @click="changeTime">Click me</b-button>
    <b-button @click="checkBuffer">Click me</b-button>
  </b-col>
</template>

<script>
import VuePlyr from 'vue-plyr'

export default {
  name: 'StreamPlayer',
  components: { VuePlyr },
  data() {
    return { options: {} }
  },
  mounted() {
    this.$refs['stream-player'].player.on('loaded', this.changeTime)
  },
  methods: {
    changeTime() {
      this.$refs['stream-player'].player.currentTime = 30
    },
    checkBuffer() {}
  }
}
</script>

<style lang="scss" scoped></style>
