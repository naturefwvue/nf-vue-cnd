  // =================== vue3的 Composition API 的含义
  const testManage = () => {
    const value = Vue.ref('你好，世界')
    const click = () => {
      value.value = '好的，收到' + new Date().valueOf()
    }

    return {
      value,
      click
    }
  }

  import test from './component/test.js'

  // vue3的对象
  const App = {
    components: {
      test
    },
    setup() { // 传说中的setup
      // 使用外面的定义，分解setup内部的代码
      const { value, click } = testManage()

      const store = Vuex.useStore()
      const setCount = () =>{
        store.commit('setCount')
      }

      return {  // 返回给模板，否则模板访问不到。
        value,
        click,
        setCount
      }
    }
  }

  export default App
