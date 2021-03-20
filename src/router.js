import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Details from './views/Details.vue'

import { cleanGif, getGif } from './helpers/useGifs'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:id',
    component: Details,
    beforeEnter: (to, from) => {
      cleanGif()
      getGif(to.params.id)
      return true
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
