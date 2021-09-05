import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Todo from '../views/Todo.vue'
import Dmap from '../views/Dmap.vue'
import Board from '../views/Board.vue'
import Note from '../views/Note.vue'
import Login from '../views/Login.vue'
import Crud from '../views/Crud.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/dmap',
      name: 'dmap',
      component: Dmap
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/crud',
      name: 'Crud',
      component: Crud
    }
    
  ]
})

export default router

