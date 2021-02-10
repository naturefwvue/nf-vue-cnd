  
  import map from './store/map.js?v=2'
  import { getCount } from './store/map2.js?v=2'

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
        setTimeout(() => {
          myReadonlyObject.time = new Date()
        }, 500);
      }

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
        setCount,
        myCount,
        myCount2,
        getCountComputed,
        myObject,
        myReadonlyObject
      }
    }
  }

  export default App
