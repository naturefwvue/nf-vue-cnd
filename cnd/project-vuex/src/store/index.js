
export default Vuex.createStore({
  state: {
    count: 0,
    myObject: {
      time: '现在的时间：'
    }
  },
  getters: {
    getCount: (state) => {
      return state.count
    },
    getAddCount: (state) => {
      return state.count++
    },
    getMyObject: (state) => {
      return Vue.readonly(state.myObject)
    },
    getTime: (state) => {
      return state.myObject.time + new Date()
    }
  },
  mutations: {
    setCount(state) {
      state.count++
    },
    setTime(state) {
      state.myObject.time = '现在时间：' + new Date()
    }
  },
  actions: {
  },
  modules: {
  }
})
