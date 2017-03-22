import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome.vue'
import Panel from '@/components/Panel.vue'
import Basic from '@/components/Basic.vue'
import Monitor from '@/components/Monitor.vue'
import Thread from '@/components/Thread.vue'
import Sql from '@/components/Sql.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/index',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/panel',
      name: 'Panel',
      component: Panel,
      children: [{
        path: '/basic',
        name: 'Basic',
        component: Basic
      },
      {
        path: '/monitor',
        name: 'Monitor',
        component: Monitor
      },
      {
        path: '/thread',
        name: 'Thread',
        component: Thread
      },
      {
        path: '/sql',
        name: 'Sql',
        component: Sql
      }]
    }
  ]
})
