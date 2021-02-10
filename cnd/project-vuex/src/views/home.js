const { ref } = Vue

const testManage = () => {
  const hello = ref('你好，世界')
  const clickMe = () => {
    hello.value = '好的22，收到' + new Date().valueOf()
  }

  return {
    hello,
    clickMe
  }
}

// vue3的对象
const home = {
    template: `
        <h2>这是home</h2>
        <div>
          我是{{value.name}}。<br>
          老规矩：{{hello}}<br>
          <input type="button" value="快点我" @click="clickMe"/><br><br>
          本项目采用“混合”模式开发，&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
          vue全家桶和UI库用script标签加载。<br>
          代码用import方式加载。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
          目录结构参考了cli建立的项目。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
          支持组件、路由、状态管理等功能。&nbsp;<br>
          状态计数：{{$store.state.count}}&nbsp;&nbsp;&nbsp;
        </div>
    `,
    setup() { // 传说中的setup
      // 使用外面的定义，分解setup内部的代码
      const { hello, clickMe } = testManage()

      const value = Vue.reactive({
        name: 'jyk'
      })

    
      return {
        value,
        hello,
        clickMe
      }
    }
  }

  export default home