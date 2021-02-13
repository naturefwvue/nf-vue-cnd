

// 设置state
const mutationsManage = () => {
  const store = Vuex.useStore()

  let commitSetCount = Vue.computed({
      get: () => store.state.count + 1,
      set: (val) => {
      // store.commit('setCount', val)
      }
  })
  console.log('commitSetCount ：', commitSetCount)
  console.log('================')

  // 定时修改 count 看响应性
  setTimeout(() => {
      // commitSetCount.value = 202 // 会直接改vuex的state
  }, 2000)

  return {
      commitSetCount
  }
}

export default {
  name: 'vuex_setter',
  template: '',
  components: {
  },
  setup () {
    const value = Vue.ref('setter')
    
    // mutations 
    const { commitSetCount } = mutationsManage()

    return {
      value,
      // 突变
      commitSetCount,
    }
  }
}
  