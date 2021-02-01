// vue3的对象
const demo = {
    template: `
        <h2>这里是状态演示</h2>
        setup 里面的 count：{{count}}<br>
    `,
    setup() { // 传说中的setup
      const store = Vuex.useStore()
      // 在代码里面获取状态
      const count = Vue.computed(() => store.getters.getCount)

      return {
        count
      }
    }
  }

  export default demo