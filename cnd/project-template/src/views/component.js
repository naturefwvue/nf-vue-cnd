export default {
    name: 'template',
    template: ``,
    components: {
      test: Vue.defineAsyncComponent(() => myImport('components/test'))
    },
    setup () {
      const value = Vue.ref('传入组件的参数')
      return {
        value
      }
    }
  }
  