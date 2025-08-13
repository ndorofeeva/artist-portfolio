import { createRouter, createWebHistory } from 'vue-router'
import PersonalIllustrations from '../views/PersonalIllustrations.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PersonalIllustrations',
      component: PersonalIllustrations
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/plein-airs',
      name: 'PleinAirs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PleinAirs.vue')
    },
    {
      path: '/chess',
      name: 'Chess',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects/Chess.vue')
    },
    {
      path: '/flower',
      name: 'Flower',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects/Flower.vue')
    },
    {
      path: '/park',
      name: 'Park',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects/Park.vue')
    },
    {
      path: '/faraway',
      name: 'Faraway',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects/Faraway.vue')
    },
    {
      path: '/faraway-pdf',
      name: 'FarawayPdf',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects/FarawayPdf.vue')
    },
    {
      path: '/lighthouse',
      name: 'Lighthouse',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects/Lighthouse.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
