
const test = () => {
  // js对象
  const object = {
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  }

  /**
   * 模仿reactive，定义一个Proxy实例，观察拦截情况
   * @param {*} _target 原型对象
   */
  const myProxy = (_target) => {
    const proxy = new Proxy(_target, {
      get: function (target, key, receiver) {
        console.log('getting',key, '：', target[key])
        // 调用原型方法
        return Reflect.get(target, key, receiver)
      },
      set: function (target, key, value, receiver) {
        console.log(`setting ${key} ： ${value}`)
        // 调用原型方法
        return Reflect.set(target, key, value, receiver)
      }
    })
    // 返回实例
    return proxy
  }

  return {
    object,
    myProxy
  }
}

/**
 * ES6的Proxy
 * 自己定义一个Proxy，看看效果
*/
export default {
  name: 'es6-Proxy',
  template: `
    <div>
      ES6的proxy<br>
      自己定义的myProxy：{{testProxy}} <br><br>
      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    const {
      object,
      myProxy
    } = test()

    console.log('object', object)

    // 定义自己写的Proxy
    const testProxy = myProxy({
      name: 'jyk',
      age: 18,
      contacts: {
        QQ: 11111,
        phone: 123456789
      }
    })
    console.log('自己定义的Proxy实例：')
    console.log(testProxy)

    // 测试拦截情况
    testProxy.name = '新的名字'
    console.log(testProxy.name)

    // 伪造一个reactive，看看toRaw好用不。
    const raw = Vue.toRaw(Vue.toRaw(myProxy({name: 'jyk',__v_isReactive: true})))
    console.log('伪装成reactive 的raw11', raw)

    // 修改数据
    const update = () => {
      // retObject.name = 'reactive修改name'
      testProxy['newprops'] = '新增一个属性：' + Math.random()
      testProxy.name = '自定义的拦截修改name' + Math.random()
      testProxy.contacts.QQ = 123456
      // 新增属性
      // myProxyReactive['new'] = '这是一个新属性' + Math.random()
    }
    
    return {
      object,
      testProxy,
      update
    }
  }
}
  