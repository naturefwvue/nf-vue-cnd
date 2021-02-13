
  // 直接获取state的成员
  const stateMemberManage = () => {
    const store = Vuex.useStore()
    
    // 看看state的类型
    let memberCount = store.state.count // 失去响应性
    const memberObject = store.state.myObject
    console.log('memberCount', memberCount)
    console.log('memberObject', memberObject)
    console.log('================')

    // 定时修改 count 看响应性
    setTimeout(() => {
      // memberCount += 101 
      // const 定义的会报错，不允许赋值，常量。
      // let 定义的可以修改，但是没有相应性
    }, 1000)
    
    return {
      memberCount,
      memberObject
    }
  }

  
export default {
    name: 'vuex_action',
    template: '',
    components: {
    },
    setup () {
      const value = Vue.ref('测试动态加载组件333')
  
      // action
      const { memberCount, memberObject } = stateMemberManage()
  
      return {
        value,
        memberCount,
        memberObject
      }
    }
  }
  