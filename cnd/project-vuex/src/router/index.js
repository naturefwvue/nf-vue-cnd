import myImport from '../script/myImport.js'

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
    component: () => myImport('../../src/views/01stateall')
  },
  {
    path: '/state2',
    name: 'state2',
    component: () => myImport('../../src/views/02statemember')
  },
  {
    path: '/getter',
    name: 'getter',
    component: () => myImport('../../src/views/03getter')
  },
  {
    path: '/setter',
    name: 'setter',
    component: () => myImport('../../src/views/04setter')
  },
  {
    path: '/action',
    name: 'action',
    component: () => myImport('../../src/views/05action')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
