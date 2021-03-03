
import mapForm from '/src/store/map-form.js'

const watch = Vue.watch
const reactive = Vue.reactive
const ref = Vue.ref

export default {
  name: 'reactive',
  template: '',
  setup () {
    const value = Vue.ref('数据绑定的演示')
  
    const { getFormState, loadData } = mapForm()
    const formState = getFormState()

    const model = reactive({
      title: ''
    })

    const myloading = ref(false)

    watch(() => formState.id ,(v1, v2) => {
      if (v1 === 0) {
        // 添加状态，重置model
        model.title = ''
      } else {
        // 修改或者只读状态，异步加载数据
        const loading = ElementPlus.ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.1)'
        })
        myloading.value = true
        loadData().then((msg) => {
          ElementPlus.ElMessage.success({
            message: msg,
            type: 'success'
          })
          myloading.value = false
          loading.close()
          Object.assign(model, formState.model)
        })
      }
    })

    return {
      value,
      formState,
      model
    }
  }
}
  