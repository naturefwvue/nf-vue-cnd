// vue3的对象
const demo = {
    template: `
        <h2>演示一下状态</h2>
        {{value}}
        setup 里面的 count：{{count}}<br>
    `,
    setup() { // 传说中的setup
      const store = Vuex.useStore()
      const count = Vue.computed(() => store.getters.getCount)

      return {
        count
      }
    }
  }

  export default demo