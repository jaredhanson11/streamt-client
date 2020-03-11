// define a mixin object
export default {
  methods: {
    getVideos(videos, template) {
      return videos.map(item => {
        item.href = template.replace('{id}', item.id)
        return item
      })
    }
  }
}
