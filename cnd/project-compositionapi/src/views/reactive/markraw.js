const reactive = Vue.reactive
const markRaw = Vue.markRaw

const testmarkRaw = () => {
  // js对象
  const object = markRaw({
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  // reactive的对象
  const retObject1 = reactive({
    name: object.name
  })

  const retObject2 = reactive(object)

  return {
    object,
    retObject1,
    retObject2
  }
}

/**
 * MarkRaw 做个标记，不响应。
 * 自己定义一个Proxy，看看效果
*/
export default {
  name: 'reactive-Proxy',
  components: {
    test: Vue.defineAsyncComponent(() => myImport('components/test'))
  },
  template: `
    <div>
      markRaw 标记 <br>
      retObject1：{{retObject1}} <br><br>
      <test :obj="object"/>11
      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    const {
      object,
      retObject1,
      retObject2
    } = testmarkRaw()

    console.log('作为初始值：', retObject1)
    console.log('无法变成响应式：', retObject2)

    // 修改数据
    const update = () => {
      // 新增属性
      // myProxyReactive['new'] = '这是一个新属性' + Math.random()
    }
    
    return {
      object,
      retObject1,
      retObject2,
      update
    }
  }
}
  