const mapForm = () => {
  const store = Vuex.useStore()
  const readonly = Vue.readonly

  // 返回可读可写的表单弹窗状态
  const formState = () => {
    return store.state.formState
  }

  // 返回只读的表单弹窗状态
  const getFormState = () => {
    return readonly(store.state.formState)
  }

  // 打开弹窗
  const openForm = () =>{
    store.commit('setFormState', { isOpen: true})
  }

  // 打开弹窗
  const closeForm = () =>{
    store.commit('setFormState', { isOpen: false})
  }

  // 设置添加数据
  const addData = () =>{
    store.commit('setFormState', { 
      isOpen: true,
      id: 0,
      editState: 'add'
    })
  }

  // 设置修改状态
  const updateData = (id) =>{
    store.commit('setFormState', { 
      isOpen: true,
      id: id,
      editState: 'update'
    })
  }

  // 设置只读状态
  const showData = (id) =>{
    store.commit('setFormState', { 
      isOpen: true,
      id: id,
      editState: 'show'
    })
  }

  // 异步获取数据
  const loadData = (id) =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        store.commit('setFormState', { 
          model: {
            title: '假装异步获取了数据'
          }
        })
        resolve('成功了！') 
      }, 1000);
    })
    
  }

  return {
    formState, // 可读写状态
    getFormState, // 只读状态
    openForm, // 打开弹窗
    closeForm, // 关闭弹窗
    addData, // 添加新纪录并且打开弹窗
    updateData, // 修改记录并且打开弹窗
    showData, // 显示数据并且打开弹窗
    loadData // 异步加载数据
  }
  
}

export default mapForm