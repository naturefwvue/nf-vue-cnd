
/**
 * reactive的导航页面
 * 1、定义reactive看效果
 * 2、只读模式
 * 3、类型判断
 * 4、响应性测试
*/
export default {
  name: 'reactive',
  template: '',
  setup () {
    const value = Vue.ref('数据绑定的演示')

    return {
      value
    }
  }
}
  