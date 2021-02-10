

/*
 * 获取计数器
*/
export const getCount = () => {
  return Vuex.useStore().state.count
}

export const getCount1 = () => {
  return Vuex.useStore().state.state.getter.getCount
}
