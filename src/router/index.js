import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import Pikavue from '../views/Pikavue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
    {
      path: '/pikavue',
      name: 'pikavue',
      component: Pikavue
    }
  ]
})

export default router
