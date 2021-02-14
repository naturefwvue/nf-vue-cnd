
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => myImport('views/home')
  },
  {
    path: '/About',
    name: 'About',
    component: () => myImport('views/About')
  },
  {
    path: '/component',
    name: 'component',
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
