import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '../view/home/HomePage.vue'
import StartPage from '../view/StartPage.vue'
import Login from '../view/login/Login.vue'
import Register from '../view/register/Register.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/start',
      name: 'start',
      component: StartPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    }
  ]
})
