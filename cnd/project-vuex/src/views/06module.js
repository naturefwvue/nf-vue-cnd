
const moduleManage = () => {
  const store = Vuex.useStore()

  const userInfo = store.state.user.userInfo

  const userInfo2 = store.getters['user/getUser']

  // store.commit('setUser', '没有命名空间的code')

  // store.dispatch('setUsera', 'actionde的code')

  store.commit('user/setUser', 'user的code')
  store.commit('myObject/setUser', 'myObject的code')
  store.commit('person/setUser', 'person的code')

  store.dispatch('user/setUsera', 'action的user的code')
  

  return {
    userInfo,
    userInfo2
  }
}

export default {
  name: 'vuex_module',
  template: '',
  components: {
  },
  setup () {
    const value = Vue.ref('module')
    
    const {
      userInfo
    } = moduleManage()

    return {
      value,
      userInfo
    }
  }
}
  