const moduleList = {
    m100: {
      moduleId: 100,
      title: '关于我们'
    },
    m102: {
      moduleId: 102,
      title: '增删改查一'
    },
    m103: {
      moduleId: 103,
      title: '增删改查二'
    },
    m104: {
      moduleId: 104,
      title: '权限管理'
    },
    m105: {
      moduleId: 105,
      title: '组织架构'
    },
    m106: {
      moduleId: 106,
      title: '员工管理'
    }
  }
  
  export default {
    name: 'NavMenu',
    template: '',
    props: {
      msg: String
    },
    setup () {
      const store = Vuex.useStore()
      const router = VueRouter.useRouter()
      const tabs = store.state.actionManage.tabs
  
      console.log('router', router)
  
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const handleSelect = (index, indexPath) => {
        console.log(typeof index)
        console.log(indexPath)
        console.log(tabs.filter((item) => item.id === index))
        // 判断是否已经存在
        if (tabs.filter((item) => item.id === index).length === 0) {
          // 添加动态tab
          tabs.push({
            id: index,
            title: moduleList['m' + index].title,
            name: moduleList['m' + index].title,
            content: ''
          })
        }
        // 路由跳转
        router.push({
          name: 'module',
          params: { moduleId: index }
        })
      }
  
      return {
        moduleList,
        handleSelect,
        handleOpen,
        handleClose
      }
    }
  }