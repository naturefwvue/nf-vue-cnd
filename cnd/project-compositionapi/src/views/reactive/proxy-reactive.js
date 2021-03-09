const reactive = Vue.reactive
const watch = Vue.watch

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

  // reactive的对象
  const retObject = reactive({
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  /**
   * 用Proxy定义一个 reactive 的套娃，实现可以监听任意属性变化的目的
   * @param {*} _target  要拦截的目标
   * @param {*} callback 属性变化后的回调函数
   */
  const myReactive = (_target, callback) => {
    let _change = (key, value) => {console.log('内部函数')}
    const proxy = new Proxy(_target, {
      get: function (target, key, receiver) {
        if (typeof key !== 'symbol') {
          console.log(`getting ${key}!`, target[key])
        } else {
          console.log('getting symbol:', key, target[key])
        }
        // 调用原型方法
        return Reflect.get(target, key, receiver)
      },
      set: function (target, key, value, receiver) {
        console.log(`setting ${key}：${value}!`)
        // 源头监听
        if (typeof callback === 'function') {
          callback(key, value)
        }
        // 任意位置监听
        if (typeof _target.__watch === 'function') {
          _change(key, value)
        }
        // 调用原型方法
        return Reflect.set(target, key, value, target)
      }
    })
    // 实现任意位置的监听，
    proxy.__watch = (callback) => {
      if (typeof callback === 'function') {
        _change = callback
      }
    }
    // 返回实例
    return proxy
  }

  const myProxy = (_target) => {
    const proxy = new Proxy(_target, {
      get: function (target, key, receiver) {
        console.log(`getting ${key}：`, target[key])
        // 调用原型方法
        return Reflect.get(target, key, receiver)
      },
      set: function (target, key, value, receiver) {
        console.log(`setting ${key}：${value}!`)
        // 调用原型方法
        return Reflect.set(target, key, value, receiver)
      }
    })
    // 返回实例
    return proxy
  }

  return {
    object,
    retObject,
    myReactive,
    myProxy
  }
}

/**
 * ES6的Proxy
 * 自己定义一个Proxy，看看效果
*/
export default {
  name: 'reactive-Proxy',
  template: `
    <div>
      用 Proxy 给reactive 套个娃看看效果 <br>
      拦截reactive的myProxy：{{myProxyReactive}} <br><br>
      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    const {
      object,
      retObject,
      myReactive,
      myProxy
    } = test()

    console.log('object', object)
    console.log('retObject', retObject)
    
    // 定义一个拦截普通对象的Proxy
    const myProxyObject = myReactive(object, ((key, value) =>{
      console.log(`obj外部获得通知：${key}:${value}`)
    }))
    console.log('myProxyObject', myProxyObject)

    // 定义一个拦截reactive的Proxy
    // 并且实现源头的监听
    const myProxyReactive = myReactive(retObject,
      ((key, value) =>{
        console.log(`ret外部获得通知：${key}:${value}`)
      })
    )
    console.log('myProxyReactive', myProxyReactive)

    // 任意位置的监听
    myProxyReactive.__watch((key, value) => {
      console.log(`任意位置的监听：${key}:${value}`)
    })

    // 定义自己写的Proxy
    const testProxy = myProxy({
      name: 'jyk',
      age: 18
    })
    console.log('自己定义的Proxy实例：')
    console.log(testProxy)

    // 测试拦截情况
    testProxy.name = '新的名字'
    console.log(testProxy.name)

    // 深度监听
    watch(() => retObject, (v1, v2) => {
      console.log('监听属性', v1, v2)
    },{
      deep: true // 深度监听
    })

    // 修改数据
    const update = () => {
      // retObject.name = 'reactive修改name'
      retObject['newprops'] = '新增一个属性：' + Math.random()
      myProxyReactive.name = '自定义的拦截修改name' + Math.random()
      myProxyReactive.contacts.QQ = 123456
      // 新增属性
      // myProxyReactive['new'] = '这是一个新属性' + Math.random()
    }
    
    return {
      object,
      retObject,
      myProxyObject,
      myProxyReactive,
      update
    }
  }
}
  