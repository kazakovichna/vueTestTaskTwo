import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/meetingList',
    name: 'meetingList',
    component: () => import('../views/meetingList')
  },
  {
    path: '/meetingList/:id',
    name: 'currentMeet',
    component: () => import('../views/currentMeet')
  }
]

const router = new VueRouter({
  routes
})

export default router
