
export default {
  name: 'nfTabs',
  template: '',
  setup () {
    const store = Vuex.useStore()

    const editableTabsValue = Vue.ref('2')
    const editableTabs = store.state.actionManage.tabs
    const tabIndex = Vue.ref(1)

    // 事件
    const addTab = (targetName) => {
      const newTabName = ++tabIndex.value + ''
      editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    }
    const removeTab = (targetName) => {
      const tabs = editableTabs
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      editableTabsValue.value = activeName
      editableTabs.length = 0
      editableTabs.push(...tabs.filter(tab => tab.name !== targetName))
    }

    return {
      editableTabsValue,
      editableTabs,
      tabIndex,
      addTab,
      removeTab
    }
  }

}