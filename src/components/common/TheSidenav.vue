<template>
  <b-col
    md="3"
    lg="2"
    id="sidenav"
    :class="`${backgroundClass} d-none d-md-block text-center`"
  >
    <b-row>
      <b-col id="sidenav-items" class="position-fixed" md="3" lg="2">
        <!-- User profile card (avatar, name, settings). -->
        <b-card id="sidenav-user" title="Streamava" />
        <!-- Sidenav navigation items. -->
        <b-row
          align-h="center"
          id="sidenav-item"
          :key="idx"
          v-for="(route, idx) in navRoutes"
        >
          <router-link :class="`${textClass}`" :to="route.path">{{
            route.name
          }}</router-link>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'TheNavbar',
  props: {
    // variant, variant value for background
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    // textVariant, variant value for text
    textVariant: {
      type: String,
      required: false,
      default: 'light'
    }
  },
  computed: {
    navRoutes() {
      return routes.filter(item => item.navItem, routes)
    },
    backgroundClass() {
      return `bg-${this.variant}`
    },
    textClass() {
      return `text-${this.textVariant}`
    }
  }
}
</script>

<style scoped lang="scss"></style>
