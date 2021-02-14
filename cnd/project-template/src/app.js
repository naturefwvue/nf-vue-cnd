  
  // import { Set_Count, Set_Count_sy } from './store/mutation-types.js'

  export default {
    name: 'app',
    setup() {
      const store = Vuex.useStore()
  
      // 状态的控制事件
      const setCount = () =>{
        store.commit('setCount')
        store.commit('setTime')
        store.commit('setArray')
        // store._mutations.setCount[0] // 这是什么？
      }
    
      return {
        // 设置state
        setCount
      }
    }
  }