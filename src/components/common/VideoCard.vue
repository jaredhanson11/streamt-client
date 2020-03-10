<template>
  <div class="pb-2 px-2" id="video-card">
    <b-card no-body :footer="title">
      <b-card-img :src="thumbnail" />
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    thumbnail: {
      type: String,
      required: false,
      default:
        'https://i.pinimg.com/474x/d0/5c/03/d05c03b605ca7af378e506a376e55daf.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
#video-card {
  flex: 0 0 auto;
}
</style>
