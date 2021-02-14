// import myImport from '../script/myImport.js?v=29'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => myImport('views/home')
  },
  {
    path: '/state',
    name: 'state',
    component: () => myImport('views/01stateall')
  },
  {
    path: '/state2',
    name: 'state2',
    component: () => myImport('views/02statemember')
  },
  {
    path: '/getter',
    name: 'getter',
    component: () => myImport('views/03getter')
  },
  {
    path: '/setter',
    name: 'setter',
    component: () => myImport('views/04setter')
  },
  {
    path: '/action',
    name: 'action',
    component: () => myImport('views/05action')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
