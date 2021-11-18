import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 导入网页进度条
import NProgress from "../../node_modules/nprogress/nprogress.js"
import "../../node_modules/nprogress/nprogress.css"

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      pageTitle: "首页",
      mainPage:true,
      isNavbar: true
    }
  },
  {
    path: '/Shopcar',
    name: 'Shopcar',
    meta: {
      pageTitle: "购物车",
      mainPage:true,
    },
    component: () => import(/* webpackChunkName: "Shopcar" */ '../views/Shopcar.vue')
  },
  {
    path: '/User',
    name: 'User',
    meta: {
      pageTitle: "个人中心",
      mainPage:true,
    },
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
  },
  {
    path:'/Site',
    name:'Site',
    meta:{
      pageTitle:"地址",
    },
    component: () => import(/* webpackChunkName: "site" */ '../views/Site.vue')
  }
]

const router = new VueRouter({
  routes
})

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})

router.afterEach((to, from) => {
    NProgress.done();
    // ...
})

export default router
