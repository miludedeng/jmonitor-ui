// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

const url = 'http://localhost:3456/jmonitor/'

Vue.prototype.$url = url
Vue.config.productionTip = false

var token = ''
var initToken = () => {
  axios.get(url + 'get_token').then(m => {
    if (m.status === 200) {
      m = m.data
      if (m.status === 'success') {
        token = m.data.token
        Vue.prototype.$token = token
      } else {
        console.log(m.message)
      }
    } else {
      console.log('get os info failed')
    }
  }, e => {
    this.jvms = []
    console.error(e)
    router.push({ path: '/login', query: {msg: 'net_work_err'} })
    clearInterval(this.timer)
    return false
  })
}
Vue.prototype.$initToken = initToken
Vue.prototype.$initToken()

axios.interceptors.request.use(config => {
  console.log('by interceptor')
  config.headers.Authorization = token
  return config
},
error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    url: url
  },
  template: '<App :url="url"/>',
  components: { App }
})
