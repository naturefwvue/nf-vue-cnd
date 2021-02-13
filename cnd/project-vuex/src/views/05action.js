
// 异步操作
const actionManame = () => {
  const store = Vuex.useStore()

  const getArray = store.dispatch('getArray')
  console.log('外部调用 getArray', getArray)
  getArray.then((data) => {
    console.log('===========')
    console.log('getArray 异步操作完成，返回数据：', data)
    console.log('===========')
  })

  const getArrayPromise = store.dispatch('getArrayPromise')
  console.log('外部调用 getArrayPromise', getArrayPromise)
  getArrayPromise.then((data) => {
    console.log('===========')
    console.log('getArrayPromise 异步操作完成，返回数据：', data)
    console.log('===========')
  })

  store.dispatch('getData').then((data) => {
    console.log('===========')
    console.log('getData 异步操作完成，返回数据：', data)
    console.log('===========')
    
  })

  return {
    getArray,
    getArrayPromise
  }
} 


export default {
  name: 'vuex_action',
  template: '',
  components: {
  },
  setup () {
    const value = Vue.ref('测试动态加载组件333')

    // action
    const { getArray, getArrayPromise } = actionManame()

    return {
      value,
      getArray,
      getArrayPromise
    }
  }
}
