

  // 间接获取
  const indirectManage = () => {
    const store = Vuex.useStore()

    // 用toRef获取 count，有相应性，可以直接修改state
    const refCount = Vue.toRef(store.state, 'count')
    // 计算属性获取count，有相应性，不可以直接修改state
    const comCount = '' // Vue.computed(() => store.state.count)
    // 只读的对象，有相应性，浅层不可以修改，但是深层还是可以修改。
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


// 处理后返回
const operationManage = () => {
  const store = Vuex.useStore()
  // 计算属性获取count
  const addCount = Vue.computed(() => store.state.count + 1)
  const getAddCount = store.getters.getAddCount
  const comGetAddCount = Vue.computed(() => store.getters.getAddCount)
  const filterArray = store.getters.filterArray(2)
  const comFilterArray = Vue.computed(() => store.getters.filterArray(2))

  console.log('addCount ：', addCount)
  console.log('getAddCount ：', getAddCount)
  console.log('comGetAddCount ：', comGetAddCount)
  console.log('filterArray ：', filterArray)
  console.log('comFilterArray ：', comFilterArray)
  console.log('================')

  return {
    addCount,
    getAddCount,
    comGetAddCount,
    filterArray,
    comFilterArray
  }

}

export default {
    name: 'vuex_getter',
    template: '',
    components: {
    },
    setup () {
      const value = Vue.ref('getter')
      
      // 间接获取成员
      const { refCount, comCount, readonlyObject } = indirectManage()
   
      // 间接获取成员
      const {
        addCount,
        getAddCount,
        comGetAddCount,
        filterArray,
        comFilterArray
      } = operationManage()
  
      return {
        value,
        addCount,
        getAddCount,
        comGetAddCount,
        filterArray,
        comFilterArray,
        refCount, comCount, readonlyObject
      }
    }
  }
  