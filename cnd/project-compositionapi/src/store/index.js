
import { Set_Count } from './mutation-types.js'

export default Vuex.createStore({
  state: {
    // 表单弹窗的状态
    formState: {
      editState: 'add', // 编辑状态，add：添加；update：修改；show ：只读显示
      id: 0, // 0：添加；其他：要修改或者显示的数据的ID
      isOpen: false, // 是否打开弹窗（模态）
      model: {} // 这里只是演示异步加载，实际项目中并不适合这么做
    }
  },
  mutations: {
    // 改变表单弹窗的状态
    setFormState(state, form) {
      // 可以设置单独的属性，这里偷懒了。
      Object.assign(state.formState, form)
    }
  },
  modules: {
  }
})
