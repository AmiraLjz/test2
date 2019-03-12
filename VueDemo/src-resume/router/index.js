/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Public from '../pages/Public.vue'
import List from '../pages/List.vue'
import MessageOne from '../pages/MessageOne.vue'
import MessageTwo from '../pages/MessageTwo.vue'
import Case from '../pages/Case.vue'
import TsPage from '../pages/TsPage.vue'

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '/public',
      component: Public
    },
    {
      path: '/list',
      component: List,
      children: [
        {
          path: 'messageone',
          component: MessageOne
        },
        {
          path: 'messagetwo',
          component: MessageTwo,
        },
        {
          path: '',
          redirect: 'messageone'
        }
      ]
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/tspage',
      component: TsPage
    },
    {
      path: '/',
      redirect: '/public'
    }
  ]
})
