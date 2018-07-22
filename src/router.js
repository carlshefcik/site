import Vue from 'vue'
import Router from 'vue-router'
import Items from './components/Items.vue'
import About from './components/About.vue'
import Main from './components/Main.vue'
import Works from './components/Works.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    }
  ]
})
