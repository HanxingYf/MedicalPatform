import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo1 from '../views/demo1'
import Demo2 from '../views/demo2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo1',
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  }
]

const router = new VueRouter({
  routes
})

export default router
