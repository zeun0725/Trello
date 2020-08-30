import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../components/Board.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Card from '../components/Card.vue'
Vue.use(VueRouter)

const requireAuth = (to, from, next) => { //인증 부분
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
      { path:'c/:cid', component: Card }
    ] },
    { path: '/login', component:Login },
    { path: '*', component:NotFound }
  ]
})
