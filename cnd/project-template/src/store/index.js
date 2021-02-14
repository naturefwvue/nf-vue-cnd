
import { Set_Count } from './mutation-types.js'

export default Vuex.createStore({
  state: {
    count: 0,
    myObject: {
      time: '现在的时间：'
    },
    myArray: [1,2,2,3,4]
  },
  getters: {
    getAddCount: (state) => {
      return state.count + 1
    },
    getTime: (state) => {
      return state.myObject.time + new Date()
    },
    filterArray: (state) => (id) => {
      return state.myArray.filter((item) => item === id)
    }
  },
  mutations: {
    // 计数器
    setCount(state, num = 1) {
      state.count += num
    },
    [Set_Count](state, num = 1) {
      state.count += num
    },
    // 设置当前时间
    setTime(state) {
      state.myObject.time = '现在时间：' + new Date()

    },
    // 设置数组的值
    setArray(state, val = 4) {
      state.myArray[1] = val
    },
    reloadArray(state, arr) {
      state.myArray.lenth = 0
      state.myArray = [...arr]
    }
  },
  actions: {
    // 异步获取数组
    getArray(context) {
      setTimeout(() => {
        context.commit('setArray', new Date().valueOf())
      }, 10000)
    },
    // 异步获取数组
    getArrayPromise(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const time = new Date().valueOf()
          resolve(time)
        }, 2000)
      })
    },
    // axios
    getDat2(context) {
      const ajax = axios.get('demo.json')
      ajax.then((response) => {
          const arr = response.data.company.formItem
          console.log('getData - axios - response', arr)
          // context.commit('reloadArray', arr)
        })
        .catch((error) => {
          console.log('getData - axios - error', error)
        })
      return ajax // 直接返回 axios 的promise的实例
    }
  },
  modules: {
  }
})
