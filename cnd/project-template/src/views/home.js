const { ref, reactive } = Vue

const testManage = () => {
  const hello = ref('你好，世界')
  const clickMe = () => {
    hello.value = '好的，收到，现在时间：' + new Date()
  }

  return {
    hello,
    clickMe
  }
}

// vue3的对象
export default {
  template: `
      <h2>我是 {{value.name}}</h2>
      <div>
        老规矩：{{hello}}<br>
        <el-button type="primary" @click="clickMe">快点我</el-button><br>
        <br>
        这里是一种CND的开发方式<br>
        vue全家桶和UI库用 CND方式 加载。<br>
        js代码用 import 方式加载。<br>
        目录结构参考了vue-cli建立的项目。<br>
        支持组件、路由、状态管理等功能。<br>
        不用webpack、npm等，建立网站就可以用。<br><br>
        状态计数：{{$store.state.count}}
      </div>
  `,
  setup() {
    // 使用外面的定义，分解setup内部的代码
    const { hello, clickMe } = testManage()

    const value = reactive({
      name: 'jyk'
    })

  
    return {
      value,
      hello,
      clickMe
    }
  }
}
