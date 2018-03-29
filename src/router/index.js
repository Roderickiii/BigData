import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/main/index'
import project from '@/components/main/project'
import finance from '@/components/main/finance'
import purchase from '@/components/main/purchase'
import hr from '@/components/main/hr'
import branch from '@/components/main/branch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/project',
      name: '项目',
      component: project
    },
    {
      path: '/finance',
      name: '财务',
      component: finance
    },
    {
      path: '/purchase',
      name: '采购',
      component: purchase
    },
    {
      path: '/hr',
      name: 'HR',
      component: hr
    },
    {
      path: '/branch',
      name: '分支机构',
      component: branch
    }
  ]
})
