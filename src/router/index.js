import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/components/Hot'
import Coming from '@/components/Coming'
import Top250 from '@/components/Top250'
import Search from '@/components/Search'
import Movice from '@/components/Movice'
import About from '@/components/About'

import '@/assets/style.css'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hot', component: Hot },
    { path: '/Coming', name: 'Coming', component: Coming },
    { path: '/Top250', name: 'Top250', component: Top250 },
    { path: '/Movice/:id', name: 'Movice', component: Movice },
    { path: '/Search', name: 'Search', component: Search },
    { path: '/About', name: 'About', component: About },
    { path: '*', redirect: { path: '/' } }
  ]
})

