import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/Content.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    meta:{
      title:'首页'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/content',
    name: 'Content',
    redirect:'/content/tang1',
    component: Content,
    meta:{
      title:'古诗'
    },
    children:[
      {
        path:'tang1',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/Item1.vue')
      },
      {
        path:'tang2',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/Item2.vue')
      },
      {
        path:'tang3',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/Item3.vue')
      },
      {
        path:'song1',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/sItem1.vue')
      },
      {
        path:'song2',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/sItem2.vue')
      },
      {
        path:'song3',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/sItem3.vue')
      },
      {
        path:'yuan1',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/yItem1.vue')
      },
      {
        path:'yuan2',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/yItem2.vue')
      },
      {
        path:'yuan3',
        component: () => import(/* webpackChunkName: "about" */ '../views/content/content/yItem3.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta:{
      title:'关于'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/help',
  //   name: 'Help',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  // },
  {
    path: '/register',
    name: 'register',
    meta:{
      title:'注册'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  //to是当前的route
  document.title = to.matched[0].meta.title//永远取第一个，嵌套路由的第一层url
  next()
})

export default router
