// 定义组件
import test from '../component/test.js?v=4'
const demo = {
    template: `
        <h2>演示一下加载组件</h2>
        <test str="传入的参数"><test/>
    `,
    components: {
      test
    },
    setup() {
      const value = Vue.reactive({
        name: 'jyk'
      })

      return {
        value
      }
    }
  }

  export default demo