
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => myImport('views/home')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => myImport('views/reactive/index'),
    children: [
      { // es6的Proxy
        path: 'proxy',
        name: 'ret-proxy',
        component: () => myImport('views/reactive/proxy')
      },
      { // 用Proxy套个娃
        path: 'proxy',
        name: 'ret-proxy-ret',
        component: () => myImport('views/reactive/proxy-reactive')
      },
      { // reactive 响应式
        path: 'reactive',
        name: 'ret-reactive',
        component: () => myImport('views/reactive/reactive')
      }, 
      { // readonly 只读
        path: 'readonly',
        name: 'ret-readonly',
        component: () => myImport('views/reactive/readonly')
      }, 
      { // toRaw
        path: 'toRaw',
        name: 'ret-toRaw',
        component: () => myImport('views/reactive/toraw')
      },
      { // toRaw
        path: 'MarkRaw',
        name: 'ret-MarkRaw',
        component: () => myImport('views/reactive/markraw')
      },
      {
        path: 'let',
        name: 'ret-let',
        component: () => myImport('views/reactive/let')
      },
      { // 验证对象类型
        path: 'check',
        name: 'ret-check',
        component: () => myImport('views/reactive/check')
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
