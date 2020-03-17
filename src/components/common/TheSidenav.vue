<template>
  <b-col
    md="3"
    lg="2"
    :class="`${backgroundClass} d-none d-md-block text-center`"
  >
    <b-row>
      <b-col
        id="sidenav"
        class="position-fixed pt-2 overflow-auto h-100"
        md="3"
        lg="2"
      >
        <!-- User profile card (avatar, name, settings). -->
        <b-card id="sidenav-user">
          <b-card-img
            class="rounded-circle w-75"
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
          />
          <div v-if="user">
            <div>
              {{ user }}
            </div>
            <b-link @click="signOut">Sign Out</b-link>
          </div>
          <div v-else>
            <router-link :to="loginRoute">Sign In</router-link>
          </div>
        </b-card>
        <!-- Sidenav navigation items. -->
        <b-col fluid id="sidenav-items">
          <b-row
            align-h="center"
            :key="idx"
            v-for="(route, idx) in navRoutes"
            :class="{
              lighten: hovered == idx || router.currentRoute.path == route.path
            }"
            @mouseover="hovered = idx"
            @mouseout="hovered = -1"
          >
            <router-link
              id="sidenav-link"
              :class="`${textClass} rounded py-3 w-100 border-bottom`"
              :to="route.path"
              >{{ route.name }}</router-link
            >
          </b-row>
        </b-col>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { routes, getRoute } from '@/router'
export default {
  name: 'TheNavbar',
  data() {
    return {
      hovered: -1,
      router: this.$router
    }
  },
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
    },
    user() {
      const user = this.$store.getters.user
      if (Object.keys(user).length) {
        return user.first_name + ' ' + user.last_name
      } else {
        return ''
      }
    },
    loginRoute() {
      return getRoute('login')
    },
    homeRoute() {
      return getRoute('home')
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('signoutUser')
    }
  }
}
</script>

<style scoped lang="scss"></style>
