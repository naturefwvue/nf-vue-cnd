// vue3的对象
const home = {
    template: `
        <h1>这是home</h1>
        {{value}}
    `,
    setup() { // 传说中的setup
      const value = Vue.reactive({
        name: 'jyk'
      })
      
      return {
        value
      }
    }
  }

  export default home