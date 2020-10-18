import Vue from 'vue'
import Router from 'vue-router'
import Card from './components/Card'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Card
  },
]
})