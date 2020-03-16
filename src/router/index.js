import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    navItem: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "streams" */ '../views/Login.vue'),
    navItem: false
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "streams" */ '../views/Signup.vue'),
    navItem: false
  },
  {
    path: '/streams',
    name: 'Streams',
    component: () =>
      import(/* webpackChunkName: "streams" */ '../views/Streams.vue'),
    navItem: true
  },
  {
    path: '/clips',
    name: 'Clips',
    component: () =>
      import(/* webpackChunkName: "clips" */ '../views/Clips.vue'),
    navItem: true
  },
  {
    path: '/highlights',
    name: 'Highlights',
    component: () =>
      import(/* webpackChunkName: "highlights" */ '../views/Highlights.vue'),
    navItem: true
  },
  {
    path: '/highlight',
    name: 'Highlight',
    component: () =>
      import(/* webpackChunkName: "highlight" */ '../views/Highlight.vue')
  }
]

export function getRoute(name) {
  const route = routes.filter(
    item => item.name.toLowerCase() == name.toLowerCase()
  )[0]
  if (route) {
    return route.path
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
