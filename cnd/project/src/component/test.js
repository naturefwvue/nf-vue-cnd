// vue3的对象
const test = {
    template: `
        <hr>
        这是 组件测试<br>
        参数：{{str}}-{{str1}}<br>
        setup - count：{{count}}<br>
        <hr>
    `,
    props: ['str'],
    props: {
      str: String
    },
    setup(props) { // 传说中的setup
      const store = Vuex.useStore()
      const str1 = Vue.ref(props.str)
      const value = Vue.reactive({
        name: 'jyk'
      })
      
      const count = Vue.computed(() => store.getters.getCount)

      return {
        value,
        count,
        str1
      }
    }
  }

  export default test