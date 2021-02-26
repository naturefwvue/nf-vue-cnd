  
  // import { Set_Count, Set_Count_sy } from './store/mutation-types.js'

export default {
  name: 'app',
  components: {
    NavMenu: Vue.defineAsyncComponent(myImport('components/public/NavMenu')),
    // NavMenu: Vue.defineAsyncComponent(() => import('./components/Public/NavMenu.js')),
    nfTabs: Vue.defineAsyncComponent(() => myImport('components/Public/nfTabs'))
  },
  setup() {
    console.log(myImport)
    const store = Vuex.useStore()

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    // 跳转到首页
    const router = VueRouter.useRouter()

    // 路由跳转
    router.push({
      name: 'Home'
    })
    return {
      handleOpen,
      handleClose
    }
  }
}