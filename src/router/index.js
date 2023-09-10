import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/Programas',
      name: 'Programas',
      component: ()=> import("../views/Programas.vue")
    },
    {
      path: '/Plataforma',
      name: 'Plataforma',
      component: ()=> import("../views/Plataforma.vue")
    }
  ]
})

export default router
