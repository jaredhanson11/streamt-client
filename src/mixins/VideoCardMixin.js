// define a mixin object
import { clientUrls } from '@/config.js'
const DEFAULT_CARD = {
  name: 'No videos added yet',
  id: 0
}
export default {
  methods: {
    getResourceUrl(resource, id) {
      return clientUrls[resource](id)
    }
  },
  computed: {
    highlights() {
      if (Object.values(this.$store.getters.highlights).length) {
        return Object.values(this.$store.getters.highlights).map(item => {
          return { ...item, href: this.getResourceUrl('highlight', item.id) }
        })
      }
      return [DEFAULT_CARD]
    },
    clips() {
      if (Object.values(this.$store.getters.clips).length) {
        return Object.values(this.$store.getters.clips).map(item => {
          return { ...item, href: this.getResourceUrl('clip', item.id) }
        })
      }
      return [DEFAULT_CARD]
    },
    streams() {
      if (Object.values(this.$store.getters.streams).length) {
        return Object.values(this.$store.getters.streams).map(item => {
          return { ...item, href: this.getResourceUrl('stream', item.id) }
        })
      }
      return [DEFAULT_CARD]
    }
  }
}
