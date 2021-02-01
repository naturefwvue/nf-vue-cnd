// vue3的对象
const home = {
    template: `
        <h1>这是home</h1>
        <div>
          我是{{value.name}}。<br>
          本项目采用“混合”模式开发，<br>
          vue全家桶和UI库用script标签加载。<br>
          代码用import方式加载。<br>
          目录结构参考了cli建立的项目。<br>
          支持组件、路由、状态管理等功能。<br>
          状态计数：{{$store.state.count}}
        </div>
    `,
    setup() { // 传说中的setup
      const value = Vue.reactive({
        name: 'jyk'
      })

      return {
        value
      }
    }
  }

  export default home