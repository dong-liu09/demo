import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/headNav',
      name: 'headNav',
      component: resolve => require(['@/pages/home/headNav'], resolve)
    },
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/home/home'], resolve)
    },
    {
      path: '/work',
      name: 'work',
      component: resolve => require(['@/pages/work/work'], resolve)
    },
    {
      path: '/cash',
      name: 'cash',
      component: resolve => require(['@/pages/cash/cash'], resolve)
    },
    {
      path: '/cashRule',
      name: 'cashRule',
      component: resolve => require(['@/pages/cash/cashRule'], resolve)
    },
    {
      path: '/jbl',
      name: 'jbl',
      component: resolve => require(['@/pages/jbl/jbl'], resolve)
    },
    {
      path: '/fh',
      name: 'fh',
      component: resolve => require(['@/pages/fenHong/fh'], resolve)
    },
    {
      path: '/sign',
      name: 'sign',
      component: resolve => require(['@/pages/home/sign'], resolve)
    },
    {
      path: '/hbxqRule',
      name: 'hbxqRule',
      component: resolve => require(['@/pages/home/hbxqRule'], resolve)
    },
    {
      path: '/invite',
      name: 'invite',
      component: resolve => require(['@/pages/home/invite'], resolve)
    },
    {
      path: '/package',
      name: 'package',
      component: resolve => require(['@/pages/package/package'], resolve)
    },
    {
      path: '/eggMachine',
      name: 'eggMachine',
      component: resolve => require(['@/pages/eggMachine/eggMachine'], resolve)
    },
    {
      path: '/work',
      name: 'work',
      component: resolve => require(['@/pages/work/work'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login/login'], resolve)
    }
    /*{
    /*{
      path: '/Home',
      name: 'Home',
      component: resolve => require(['@/pages/Home5'], resolve)
    }*/
  ]
})
