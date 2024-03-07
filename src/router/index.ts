import { createRouter, createWebHistory } from 'vue-router'
import LibariesView from '@/views/LibariesView.vue'
import MyLibaryView from '@/views/MyLibaryView.vue'
import ContateMeView from '@/views/ContateMeView.vue'
import AuthView from '@/views/AuthView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LibariesView
    },
    {
      path: '/MyLibaries',
      name: 'My Libaries',
      component: MyLibaryView
    },
    {
      path: '/ContactMe',
      name: 'Contate-me',
      component: ContateMeView
    },
    {
      path: '/Login',
      name: 'Login',
      component: AuthView
    }
  ]
})

export default router
