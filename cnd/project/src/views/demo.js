// vue3的对象
const demo = {
    template: `
        <h1>这是 demo </h1>
        {{value}}
        setup - count：{{count}}<br>
        <test><test/>
    `,
    components: {
      test: import('../component/test.js')
    },
    setup() { // 传说中的setup
      const store = Vuex.useStore()

      const value = Vue.reactive({
        name: 'jyk'
      })
      
      const count = Vue.computed(() => store.getters.getCount)

      return {
        value,
        count
      }
    }
  }

  export default demo