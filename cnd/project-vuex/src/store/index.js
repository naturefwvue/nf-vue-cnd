
import { Set_Count, Set_Count_sy } from './mutation-types.js'

import user from './user.js'

const myPlugin = store => {
  console.log('插件--store', store)
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    console.log('插件--store', store)
    console.log('插件--', mutation)

    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }

  })
}

export default Vuex.createStore({
  // plugins: [myPlugin],
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
      console.log('================================')
      console.log('异步getArray——context', context)
      setTimeout(() => {
        context.commit('setArray', new Date().valueOf())
      }, 10000)
    },
    // 异步获取数组
    getArrayPromise(context) {
      return new Promise((resolve, reject) => {
        console.log('================================')
        console.log('异步 getArrayPromise ——context', context)
        setTimeout(() => {
          const time = new Date().valueOf()
          // context.commit('setArray', time)
          resolve(time)
        }, 2000)
      })
    },
    // axios
    getData(context) {
      return new Promise((resolve, reject) => {
        axios.get('demo.json')
          .then((response) => {
            const arr = response.data.company.formItem
            console.log('getData - axios - response', response)
            // context.commit('reloadArray', response.data.company.formItem)
            resolve(arr)
          })
          .catch((error) => {
            console.log('getData - axios - error', error)
          })
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
    myObject: user,
    user: user,
    person: user
  }
})
