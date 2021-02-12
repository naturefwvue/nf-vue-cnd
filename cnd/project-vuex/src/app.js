  
  import map from './store/map.js?v=12'

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
      // allState.count += 101 // 会直接改vuex的state
    }, 1000)
    
    return {
      allState
    }
  }

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
      memberCount += 101 
      // const 定义的会报错，不允许赋值，常量。
      // let 定义的可以修改，但是没有相应性
    }, 1000)
    
    return {
      memberCount,
      memberObject
    }
  }

  // 间接获取
  const indirectManage = () => {
    const store = Vuex.useStore()

    // 用toRef获取 count，有相应性，可以直接修改state
    const refCount = Vue.toRef(store.state, 'count')
    // 计算属性获取count，有相应性，不可以直接修改state
    const comCount = Vue.computed(() => store.state.count)
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
    const addCount = '' // Vue.computed(() => store.state.count++)
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

  // vue3的对象
  const App = {
    setup() { // 传说中的setup
      const store = Vuex.useStore()
  
      // 状态的控制事件
      const setCount = () =>{
        store.commit('setCount')
        store.commit('setTime')
        store.commit('setArray')
        
        store._mutations.setCount[0] // 这是什么？

      }

      // 获取state
      const { allState } = allStateManage()
      // 直接获取成员
      const { memberCount, memberObject } = stateMemberManage()
      // 间接获取成员
      const { refCount, comCount, readonlyObject } = indirectManage()
      // 间接获取成员
      const { addCount, getAddCount, comGetAddCount, filterArray, comFilterArray } = operationManage()

      // 通过map 获取 count
      // 可以使用别名
      const {
        getCount: mapGetCount
      } = map()

      const mapCount = mapGetCount()

      return {  // 返回给模板，否则模板访问不到。
        // 直接获取state
        allState,
        // 直接获取成员
        memberCount,memberObject,
        // 间接获取
        refCount, comCount,readonlyObject,
        // 操作后获取
        addCount,getAddCount,comGetAddCount,filterArray,comFilterArray,
        // map
        mapCount,
        // 设置state
        setCount
      }
    }
  }

  export default App
