import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('../components/Home/AboutPage.vue')
    }
  ]
})

export default router
