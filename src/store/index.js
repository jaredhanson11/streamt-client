import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/store/api.js'
import router from '@/router'
import { getRoute } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      first_name: null,
      last_name: null,
      id: null,
      email: null
    },
    streams: {},
    clips: {},
    highlights: {},
    api: {
      loading: false,
      error: null
    }
  },
  mutations: {
    setUser(state, userJson) {
      Vue.set(state.user, 'first_name', userJson.first_name)
      Vue.set(state.user, 'last_name', userJson.last_name)
      Vue.set(state.user, 'id', userJson.id)
      Vue.set(state.user, 'email', userJson.email)
    },
    setStreams(state, streamsList) {
      var streams = {}
      for (stream in streamsList) {
        streams[stream.id] = stream
      }
      Vue.set(state, 'streams', streams)
    },
    setStream(state, stream) {
      Vue.set(state.streams, stream.id, stream)
    },
    setClips(state, clipsList) {
      var clips = {}
      for (clip in clipsList) {
        clips[clip.id] = clip
      }
      Vue.set(state, 'clips', clips)
    },
    setClip(state, clip) {
      Vue.set(state.clips, clip.id, clip)
    },
    setHighlights(state, highlightsList) {
      var highlights = {}
      for (highlight in highlightsList) {
        highlights[highlight.id] = highlight
      }
      Vue.set(state, 'highlights', highlights)
    },
    setHighlight(state, highlight) {
      Vue.set(state.highlights, highlight.id, highlight)
    },
    setApiLoading(state, loading) {
      Vue.set(state.api, 'loading', loading)
    },
    setApiError(state, error) {
      Vue.set(state.api, 'error', error)
    }
  },
  actions: {
    getHome(store) {
      API.axios
        .get(API.apiRoutes.HOME())
        .then(response => {
          store.commit('setUser', response.data.user)
          store.commit('setStreams', response.data.streams)
          store.commit('setClips', response.data.clips)
          store.commit('setHighlights', response.data.highlights)
        })
        .catch(error => {
          store.commit('setApiError', error.data)
        })
        .finally(() => {
          store.commit('setApiLoading', false)
        })
      store.commit('setApiLoading', true)
    },
    loginUser(store, data) {
      API.axios
        .post(API.apiRoutes.LOGIN(), data)
        .then(response => {
          store.commit('setUser', response.data)
          router.push(getRoute('home'))
        })
        .finally(() => {
          store.commit('setApiLoading', false)
        })
      store.commit('setApiLoading', true)
    },
    signupUser(store, data) {
      API.axios
        .post(API.apiRoutes.SIGNUP(), data)
        .then(response => {
          store.commit('setUser', response.data)
          router.push(getRoute('home'))
        })
        .finally(() => {
          store.commit('setApiLoading', false)
        })
      store.commit('setApiLoading', true)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    streams(state) {
      return state.streams
    },
    clips(state) {
      return state.clips
    },
    highlights(state) {
      return state.highlights
    }
  }
})
