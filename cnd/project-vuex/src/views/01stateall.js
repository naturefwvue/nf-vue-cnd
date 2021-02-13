
 // 整体获取
 const allStateManage = () => {
    const store = Vuex.useStore()

    // 看看state的类型
    console.log('state：', store.state)
    console.log('state.count：', store.state.count)
    console.log('state.myObject：', store.state.myObject)

    // 获得整体的state
    const allState = store.state
    console.log('allState：', allState)
    console.log('================')

    // 定时修改 count 看响应性
    setTimeout(() => {
      // store.commit('setCount')
      allState.count += 101 // 会直接改vuex的state
    }, 1000)
    
    return {
      allState
    }
  }

  
export default {
    name: 'vuex_state_all',
    template: '',
    components: {
    },
    setup () {
      const value = Vue.ref('state_all')
   
      // 获取state
      const { allState } = allStateManage()

      return {
        value,
        allState
      }
    }
  }
  