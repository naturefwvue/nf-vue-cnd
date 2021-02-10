
const map = {
    /*
    * 获取计数器
    */
    getCount: () => {
      return Vuex.useStore().state.count
    },
    getCountComputed: () => {
      return Vue.computed(() => Vuex.useStore().state.count)
    },
    getCount1: () => {
      return Vuex.useStore().state.getter.getCount
    },
    getObject: () => {
      return Vuex.useStore().state.myObject
    },
    getReadonlyObject: () => {
      return Vue.readonly(Vuex.useStore().state.myObject)
    }

}

export default map