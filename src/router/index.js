import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import EmailApp from '@/components/email/EmailApp'
import MapApp from '@/components/map/MapApp'
import BooksApp from '@/components/book/BookApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/email',
      name: 'email',
      component: EmailApp
    },
    {
      path: '/map',
      name: 'map',
      component: MapApp
    },
    {
      path: '/book',
      name: 'book',
      component: BooksApp
    }
  ]
})
