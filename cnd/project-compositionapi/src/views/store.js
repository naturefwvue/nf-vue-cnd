

  // 获取状态
  const indirectManage = () => {
    const store = Vuex.useStore()

    // 用toRef获取 count，有相应性，可以直接修改state
    const refCount = Vue.toRef(store.state, 'count')
    // 计算属性获取count，有相应性，不可以直接修改state
    const comCount = Vue.computed(() => store.state.count + 10)
    // 只读的对象，有响应性，浅层不可以修改，但是深层还是可以修改。
    const readonlyObject = Vue.readonly(store.state.myObject)

    console.log('refCount：', refCount)
    console.log('comCount：', comCount)
    console.log('readonlyObject：', readonlyObject)
    console.log('================')

    // 定时修改 count 看响应性
    setTimeout(() => {
      // store.commit('setCount')
      // refCount.value += 200 // 会直接改vuex的state
    }, 2000)
   
    return {
      refCount,
      comCount,
      readonlyObject
    }
  }


export default {
    name: 'vuex_store',
    template: '',
    components: {
    },
    setup () {
      const value = Vue.ref('状态管理的演示')
      
      // 获取状态
      const { refCount, comCount, readonlyObject } = indirectManage()
     
      return {
        value,
        refCount, comCount, readonlyObject
      }
    }
  }
  