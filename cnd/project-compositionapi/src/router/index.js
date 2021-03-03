
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => myImport('views/home')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => myImport('views/reactive'),
    children: [
      {
        path: 'log',
        name: 'ret-log',
        component: () => myImport('views/reactive-log')
      }, 
      {
        path: 'proxy',
        name: 'ret-proxy',
        component: () => myImport('views/reactive-proxy')
      },
      {
        path: 'log',
        name: 'ret-let',
        component: () => myImport('views/reactive-proxy')
      },
      {
        path: 'log',
        name: 'ret-let',
        component: () => myImport('views/reactive-proxy')
      }
      
    ]
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => myImport('views/component')
  },
  {
    path: '/store',
    name: 'store',
    component: () => myImport('views/store')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
