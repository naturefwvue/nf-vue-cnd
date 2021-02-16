
export default {
  name: 'PackList',
  template: '',
  components: {
    nfButton: Vue.defineAsyncComponent(
      () => myImport('components/public/nfButton')
    ),
    nfFind: Vue.defineAsyncComponent(
      () => myImport('components/public/nfFind')
    ),
    nfPager: Vue.defineAsyncComponent(
      () => myImport('components/public/nfGrid')
    ),
    nfGrid: Vue.defineAsyncComponent(
      () => myImport('components/public/nfPager')
    )
  },
  props: {
    moduleId: Number
  },
  setup () {
    const store = Vuex.useStore()
    const aa = store.state.actionManage.tabs

    console.log('aa', aa)
  }
}