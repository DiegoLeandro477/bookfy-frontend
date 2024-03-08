import { createRouter, createWebHistory } from 'vue-router'
import LibariesView from '@/views/LibariesView.vue'
import MyLibaryView from '@/views/MyLibaryView.vue'
import ContateMeView from '@/views/ContateMeView.vue'
import AuthView from '@/views/AuthView.vue'
import { useAuth } from '@/stores/AuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LibariesView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: MyLibaryView,
      meta: {
        auth: true
      }
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

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (to.meta?.auth){
    if (auth.token && auth.user) {
      auth.checkToken().then(isAuthenticated => {
        if (isAuthenticated) {
          next();
        } else {
          next('/Login');
        }
      }).catch(error => {
        console.error('Erro ao verificar autenticação:', error);
        next('/Login');
      });
    }else {
      next('/Login');
    }
  } else {
    next();
  }
})

export default router
