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
        这里演示 Vue3 的 响应式 和 composition API 的各种用法
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
