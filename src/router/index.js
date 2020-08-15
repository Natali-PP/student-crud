import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: () => import('../components/CreateStudentComponent.vue')
  },
  {
    path: '/view',
    name: 'view',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ListStudentsComponent.vue')
  },
  {
    path:  '/edit/:id',
    name: 'edit',
    props: { default: true},
    component: () => import('../components/EditStudentComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
