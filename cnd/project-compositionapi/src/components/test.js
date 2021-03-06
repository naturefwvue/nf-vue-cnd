export default {
  name: 'component-test',
  template: '',
  props: {
    str: String,
    obj: Object
  },
  setup(props) {
    // 在setup里面获取参数值
    let str1 = Vue.ref(props.str)
    str1.value += '--内部改一下。'
    console.log('组件属性——props：', props)
    console.log('组件属性——obj：', props.obj)
    console.log('组件属性——props：', Vue.isReadonly(props))
    console.log('组件属性——obj：', Vue.isReadonly(props.obj))
   
    return {
      str1
    }
  }
}