
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
    setCount(state) {
      state.count++
    },
    setTime(state) {
      state.myObject.time = '现在时间：' + new Date()
    },
    setArray(state) {
      state.myArray[1] = 4
    }
  },
  actions: {
  },
  modules: {
  }
})
