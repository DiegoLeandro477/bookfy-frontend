import { createRouter, createWebHistory } from 'vue-router'
import LibariesView from '@/views/LibariesView.vue'
import MyLibaryView from '@/views/MyLibaryView.vue'
import ContateMeView from '@/views/ContateMeView.vue'
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
    }
  ]
})

export default router