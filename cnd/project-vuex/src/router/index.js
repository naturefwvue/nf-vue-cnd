// import Home from '../views/home.js?v=2'

const ver = window.__ver || ''
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.js' + ver)
  },
  {
    path: '/state',
    name: 'state',
    component: () => import('../views/state.js' + ver)
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/component.js' + ver)
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
