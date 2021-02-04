// 引入组件
import test from '../component/test.js?v=7'

const demo = {
    template: `
        <h2>这是组件演示</h2>
        <test str="传入的参数"></test>
    `,
    components: {
      test
    },
    setup() {

      return {
      }
    }
  }

  export default demo