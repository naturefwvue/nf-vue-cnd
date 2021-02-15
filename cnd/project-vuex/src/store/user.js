
const user = {
  namespaced: true, // 避免重名
  state: () => ({
    userInfo: {
      userId: 123,
      userCode: '',
      userNick: ''
    },
    userRole: []
  }),
  mutations: { 
    setUser(state, code) {
      state.userInfo.userCode = code
    }
  },
  getters: {
    getUser(state)  {
      return state.userInfo
    } 
  },
  actions: {
    // { state, commit, rootState }
    setUsera (store, code) {
      store.commit('setUser', code)
    }
  }
}

export default user