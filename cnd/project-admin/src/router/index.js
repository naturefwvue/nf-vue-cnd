
const routes = [
  {
    path: '/',
    name: 'Home',
    // component: () => myImport('views/home')
    components: {
      default: () => myImport('views/home'),
      naveMenu: () => myImport('components/public/navMenu'),
      tabs: () => myImport('components/public/nfTabs')
    } 
    
  },
  {
    path: '/About',
    name: 'About',
    component: () => myImport('components/public/navMenu')
  },
  {
    path: '/module/:moduleId',
    name: 'module',
    meta: { title: '列表页面' },
    props: true,
    // component: () => myImport('views/packList'),
    components: {
      default: () => myImport('views/packList'),
      naveMenu: () => myImport('components/public/navMenu'),
      tabs: () => myImport('components/public/nfTabs')
    },
    children: [
      {
        path: 'btn/:moduleId',
        name: 'btn',
        props: true,
        meta: { title: '弹窗页面' },
        component: () => myImport('views/home')
      }
    ]
    // components: {
    //  default: () => import('../views/classical/question-main-introduce.vue'),
    //  answerList: () => import('../views/classical/question-main-answers.vue')
    // }
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
