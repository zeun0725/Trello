import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../components/Board.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Card from '../components/Card.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/b/:bid', component: Board, children: [
      { path:'c/:cid', component: Card }
    ] },
    { path: '/login', component:Login },
    { path: '*', component:NotFound }
  ]
})
