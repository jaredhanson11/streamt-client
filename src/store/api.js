import router from '@/router'
import { routes } from '@/router'
import axios from 'axios'

// SETUP ROUTES
const BASE_HOST = 'http://localhost:8000'
const V1_API = BASE_HOST + '/api/v1.0'

const apiRoutes = {
  LOGIN: () => V1_API + '/login',
  SIGNUP: () => V1_API + '/signup',
  HOME: () => V1_API + '/home',
  STREAMS: () => V1_API + '/streams',
  STREAM: id => V1_API + `/streams/${id}`,
  CLIPS: () => V1_API + '/clips',
  CLIP: id => V1_API + `/clips/${id}`,
  HIGHLIGHTS: () => V1_API + '/highlights',
  HIGHLIGHT: id => V1_API + `/highlights/${id}`
}

// SETUP AXIOS
axios.interceptors.request.use(request => {
  request.withCredentials = true
  return request
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (!error.response) {
    } else if (error.response.status == 401) {
      const loginRoute = routes.filter(
        item => item.name.toLowerCase() == 'login'
      )[0]
      router.push(loginRoute.path)
    }
    return Promise.reject(error)
  }
)

export default {
  apiRoutes,
  axios
}
