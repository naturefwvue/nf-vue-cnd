
const aa = '外部定义'

const test = {
  template: `
      这是 组件测试<br>
      参数：{{str1}}<br>
      外部函数：{{aa}}<br>
  `,
  props: {
    str: String
  },
  setup(props) {
    // 在setup里面获取参数值
    const str1 = Vue.ref(props.str)
    // alert('test的alert')
    return {
      str1,
      aa
    }
  }
}

export default test