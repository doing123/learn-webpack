import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: 'home' */'@/pages/Home') // 动态引入 @ 表示src目录
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import(/* webpackChunkName: 'todos' */'@/pages/Todos') // 动态引入 @ 表示src目录
    }
  ]
})
