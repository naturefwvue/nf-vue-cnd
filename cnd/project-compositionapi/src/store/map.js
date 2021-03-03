
const map = () => {
  const store = Vuex.useStore()
    
  /**
  * 获取count，
  * 用computed实现相应
  */
  const getCount = () => {
    return Vue.computed(() => store.state.count)
  }

  /**
  * 获取count，
  ** 用 ref 实现相应
  */
  const getRefCount = () => {
    return Vue.ref(store.state.count)
  }

  /**
  * 获取对象
  */
  const getObject = () => {
    return store.state.myObject
  }

  /**
  * 获取只读对象
  */
  const getReadonlyObject = () => {
    return Vue.readonly(store.state.myObject)
  }

  /**
  * 获取数组
  */
  const getArray = () => {
    return store.state.myArray
  }
  /**
  * 获取只读数组
  */
  const getReadonlyArray = () => {
    return Vue.readonly(store.state.myArray)
  }

  /**
  * 查询数组
  ** id：要查询的数据
  */
  const filterArray = (id) => {
    return  Vue.computed(() => store.getters.filterArray(id))
  }

  return {
    getCount,
    getRefCount,
    getObject,
    getReadonlyObject,
    getArray,
    getReadonlyArray,
    filterArray
  }

}

export default map