import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Basic from '@/components/Basic.vue'
import Monitor from '@/components/Monitor.vue'
import Thread from '@/components/Thread.vue'
import Sql from '@/components/Sql.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'IndexWelcome',
      component: Home,
      children: [{
        path: '/panel/basic',
        name: 'Basic',
        component: Basic
      },
      {
        path: '/panel/monitor',
        name: 'Monitor',
        component: Monitor
      },
      {
        path: '/panel/thread',
        name: 'Thread',
        component: Thread
      },
      {
        path: '/panel/sql',
        name: 'Sql',
        component: Sql
      }]
    }
  ]
})
