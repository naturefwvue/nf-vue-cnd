const test = {
    template: `
        这是 组件测试<br>
        参数：{{str1}}<br>
    `,
    model: {
      prop: ['str']
    },
    props: {
      str: String
    },
    setup(props) {
      // 在setup里面获取参数值
      const str1 = Vue.ref(props.str)
     
      return {
        str1
      }
    }
  }

  export default test