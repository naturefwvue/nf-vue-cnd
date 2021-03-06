const reactive = Vue.reactive
const isProxy = Vue.isProxy
const isReactive = Vue.isReactive
const isReadonly = Vue.isReadonly
const readonly = Vue.readonly
const shallowReactive = Vue.shallowReactive
const shallowReadonly = Vue.shallowReadonly

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

  // reactive的数组
  const retArray = reactive([
    {
      name: 'jyk',
      age: 18
    },
    {
      name: 'jyk111',
      age: 19
    }
  ])

  const myReactive = (obj) => {
    const pp = new Proxy(obj, {
      get: function (target, key, receiver) {
        if (typeof key !== 'symbol') {
          console.log(`getting ${key}!`, target[key])
        } else {
          console.log('getting symbol:', key, target[key])
        }
        return Reflect.get(target, key, receiver)
      },
      set: function (target, key, value, receiver) {
        console.log(`setting ${key}：${value}!`)
        return Reflect.set(target, key, value, receiver)
      }
    })

    return pp
  }

  return {
    object,
    retObject,
    retArray,
    myReactive
  }
}

/**
 * 验证类型
 * isPoxy、isReactive、isReadonly做对比测试
*/
export default {
  name: 'reactive-check',
  template: ``,
  setup () {
    const {
      object,
      retObject,
      retArray,
      myReactive
    } = test()

    console.log('object', object)
    console.log('retObject', retObject)
    console.log('retArray', retArray)
    
    const myret = myReactive({title:'222'})
    console.log('myret', myret)
    const myProxyReactive = myReactive(retObject)
    console.log('myProxyReactive', myProxyReactive)

    // 深层只读
    const readonlyObject = readonly(object)
    const readonlyreactive = readonly(retObject)

    // 浅层响应式，对象参数和reactive参数
    const shallowReactive1 = shallowReactive(object)
    const shallowReactive2 = shallowReactive(retObject)

    // 浅层只读代码
    const shallowReadonly1 = shallowReadonly(object)
    const shallowReadonly2 = shallowReadonly(retObject)

    console.log('shallowReactive1', shallowReactive1)
    console.log('shallowReadonly1', shallowReadonly1)

    return {
      obj: { // js对象
        obj1: isProxy(object),
        obj2: isReactive(object),
        obj3: isReadonly(object)
      },
      myproxy: { // 自己定义的Proxy reactive
        obj1: isProxy(myret),
        obj2: isReactive(myret),
        obj3: isReadonly(myret)
      },
      myproxyReactive: {
        obj1: isProxy(myProxyReactive),
        obj2: isReactive(myProxyReactive),
        obj3: isReadonly(myProxyReactive)
      },
      reto: { // reactive（object）
        obj1: isProxy(retObject),
        obj2: isReactive(retObject),
        obj3: isReadonly(retObject)
      },
      reta: { // reactive（array）
        obj1: isProxy(retArray),
        obj2: isReactive(retArray),
        obj3: isReadonly(retArray)
      },
      
      // 深层只读，参数 object
      readObj: { // readonly object
        obj1: isProxy(readonlyObject),
        obj2: isReactive(readonlyObject),
        obj3: isReadonly(readonlyObject)
      },
      // 深层只读，参数 reactive
      readRet: { // readonly reactive
        obj1: isProxy(readonlyreactive),
        obj2: isReactive(readonlyreactive),
        obj3: isReadonly(readonlyreactive)
      },

      // 浅层响应 参数：object
      shallowRetObj: {
        obj1: isProxy(shallowReactive1),
        obj2: isReactive(shallowReactive1),
        obj3: isReadonly(shallowReactive1)
      },
      // 浅层响应 参数：reactive
      shallowRetRet: {
        obj1: isProxy(shallowReactive2),
        obj2: isReactive(shallowReactive2),
        obj3: isReadonly(shallowReactive2)
      },

      // 浅层只读 参数：object
      shallowReadObj: {
        obj1: isProxy(shallowReadonly1),
        obj2: isReactive(shallowReadonly1),
        obj3: isReadonly(shallowReadonly1)
      },
      // 浅层只读 参数：reactive
      shallowReadRet: {
        obj1: isProxy(shallowReadonly2),
        obj2: isReactive(shallowReadonly2),
        obj3: isReadonly(shallowReadonly2)
      },
      object,
      retObject,
      retArray,
    }
  }
}
  