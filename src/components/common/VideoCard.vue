<template>
  <div class="pb-2 px-2" id="video-card">
    <a :href="href">
      <b-card no-body>
        <b-card-img :src="thumbnail" />
        <b-card-footer v-b-tooltip.hover :title="name" id="card-footer">
          {{ name }}
        </b-card-footer>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Number,
      required: false
    },
    href: {
      type: String,
      required: false
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
#card-footer {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
