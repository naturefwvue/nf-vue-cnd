const isProxy = Vue.isProxy
const isReactive = Vue.isReactive
const isReadonly = Vue.isReadonly
const toRaw = Vue.toRaw

import { 
  person, // object 对象
  personReactive, // object  的 reactive 代理
  // 深层读写
  objectReactive, // reactive （object）
  // 浅层读写
  objectShallowReactive, // 浅层 代理
  // 浅层 reactive 的读写
  retShallowReactive, 
  // 浅层只读
  objectShallowReadonly, // 浅层只读 object
  reactiveShallowReadonly, // 浅层只读 reactive
  // 深层只读
  objectReadonly , // 深层只读 object
  reactiveReadonly // 深层只读 reactive
} from './person.js?v=1'

const myProxy = (obj) => {
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

/**
 * 验证类型
 * isPoxy、isReactive、isReadonly做对比测试
*/
export default {
  name: 'reactive-check',
  template: ``,
  setup () {

    const myProxyObject = myProxy({title:'222', __v_isReactive: true})
    console.log('myProxyObject', myProxyObject)
    const myProxyReactive = myProxy(objectReactive)
    console.log('myProxyReactive', myProxyReactive)

    // 试一试 __v_isReadonly
    console.log('objectReactive', objectReactive)
    console.log('__v_isReadonly'
      , objectReactive.__v_isReadonly
      , objectReactive.__v_isReactive
      )

    // 取原型
    const raw = toRaw(myProxyReactive)
    console.log('自己定义的Proxy取原型', raw)

    return {
      obj: { // js对象
        check1: isProxy(person),
        check2: isReactive(person),
        check3: isReadonly(person)
      },
      myproxy: { // 自己定义的Proxy object
        check1: isProxy(myProxyObject),
        check2: isReactive(myProxyObject),
        check3: isReadonly(myProxyObject)
      },
      myproxyReactive: { // 自己定义的Proxy reactive
        check1: isProxy(myProxyReactive),
        check2: isReactive(myProxyReactive),
        check3: isReadonly(myProxyReactive)
      },
      // 深层响应  reactive（object）
      reto: { // reactive（object）
        check1: isProxy(objectReactive),
        check2: isReactive(objectReactive),
        check3: isReadonly(objectReactive)
      },
      // 浅层响应 参数：object
      shallowRetObj: {
        check1: isProxy(objectShallowReactive),
        check2: isReactive(objectShallowReactive),
        check3: isReadonly(objectShallowReactive)
      },
      // 浅层响应 参数：reactive
      shallowRetRet: {
        check1: isProxy(retShallowReactive),
        check2: isReactive(retShallowReactive),
        check3: isReadonly(retShallowReactive)
      },

      // 深层只读，参数 object =======================
      readObj: { // readonly object
        check1: isProxy(objectReadonly),
        check2: isReactive(objectReadonly),
        check3: isReadonly(objectReadonly)
      },
      // 深层只读，参数 reactive
      readRet: { // readonly reactive
        check1: isProxy(reactiveReadonly),
        check2: isReactive(reactiveReadonly),
        check3: isReadonly(reactiveReadonly)
      },
      // 浅层只读 参数：object
      shallowReadObj: {
        check1: isProxy(objectShallowReadonly),
        check2: isReactive(objectShallowReadonly),
        check3: isReadonly(objectShallowReadonly)
      },
      // 浅层只读 参数：reactive
      shallowReadRet: {
        check1: isProxy(reactiveShallowReadonly),
        check2: isReactive(reactiveShallowReadonly),
        check3: isReadonly(reactiveShallowReadonly)
      },
      person
    }
  }
}
  