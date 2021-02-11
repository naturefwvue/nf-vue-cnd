  
  import map from './store/map.js?v=2'
  import { getCount } from './store/map2.js?v=2'

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

    // 定时修改 count 看响应性
    setTimeout(() => {
      // store.commit('setCount')
      allState.count += 101 // 会直接改vuex的state
    }, 1000)
    
    return {
      allState
    }
  }

  // 直接获取成员
  const stateMemberManage = () => {
    const store = Vuex.useStore()
    
    // 看看state的类型
    let memberCount = store.state.count // 失去响应性
    console.log('memberCount', memberCount)
    const memberObject = store.state.myObject
    console.log('memberObject', memberObject)

    // 定时修改 count 看响应性
    setTimeout(() => {
      // store.commit('setCount')
      memberCount += 101 // 报错，不允许赋值，常量
    }, 1000)
    
    return {
      memberCount,
      memberObject
    }
  }

  // 间接获取
  const indirectManage = () => {
    const store = Vuex.useStore()

    // 用toRef获取 count
    const refCount = Vue.toRef(store.state, 'count')
    // 计算属性获取count
    const comCount = Vue.computed(() => store.state.count)
    // 只读的对象
    const readonlyObject = Vue.readonly(store.state.myObject)

    console.log('refCount：', refCount)

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
  const op = () => {
    const store = Vuex.useStore()
    // 计算属性获取count
    const addCount = Vue.computed(() => store.state.count++)
    
    return {
      addCount
    }
    
  }

  // vue3的对象
  const App = {
    setup() { // 传说中的setup
      const store = Vuex.useStore()
  
      // 状态的控制事件
      const setCount = () =>{
        store.commit('setCount')
        setTimeout(() => {
          myReadonlyObject.time = new Date()
        }, 500);
      }

      // 获取state
      const { allState } = allStateManage()
      // 直接获取成员
      const { memberCount, memberObject } = stateMemberManage()
      // 间接获取成员
      const { refCount, comCount, readonlyObject } = indirectManage()
    


      // 通过map 获取 count
      const myCount = map.getCount()

      const myCount2 = getCount()

      // computed 
      const getCountComputed = map.getCountComputed()

      // 获取对象
      const myObject = map.getObject()

      // 获取对象
      const myReadonlyObject = map.getReadonlyObject()

      return {  // 返回给模板，否则模板访问不到。
        // 直接获取state
        allState,
        // 直接获取成员
        memberCount,memberObject,
        // 间接获取
        refCount, comCount,readonlyObject,
        // 设置state
        setCount,
        myCount,
        myCount2,
        getCountComputed,
        myObject,
        myReadonlyObject,
        // 大号data
        allState,
        refCount
      }
    }
  }

  export default App
