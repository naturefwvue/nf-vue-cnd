  
  // vue3的对象
  const App = {
    setup() { // 传说中的setup
     
      const store = Vuex.useStore()
      // 看看state的类型
      console.log('state：', store.state)
      console.log('state.count：', store.state.count)
      console.log('state.myObject：', store.state.myObject)

      // 状态的控制事件
      const setCount = () =>{
        store.commit('setCount')
      }

      return {  // 返回给模板，否则模板访问不到。
        setCount
      }
    }
  }

  export default App
