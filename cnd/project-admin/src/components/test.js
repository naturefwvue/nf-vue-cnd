export default {
  name: 'component-test',
  template: '',
  props: {
    str: String
  },
  setup(props) {
    // 在setup里面获取参数值
    let str1 = Vue.ref(props.str)
    str1.value += '--内部改一下。'

    return {
      str1
    }
  }
}