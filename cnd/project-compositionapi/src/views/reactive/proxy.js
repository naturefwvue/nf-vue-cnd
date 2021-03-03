const reactive = Vue.reactive
const isProxy = Vue.isProxy
const isReactive = Vue.isReactive
const isReadonly = Vue.isReadonly
const readonly = Vue.readonly

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

import mapForm from '/src/store/map-form.js'

/**
 * ES6的Proxy
 * 自己定义一个Proxy，看看效果
*/
export default {
  name: 'reactive-Proxy',
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

    setTimeout(() => {
      retObject.name = 'retObject'
      // myret.name = 'myret2222'
      console.log('myret - settimeout', myret)
      console.log('retObject - settimeout', retObject)
    },2000)

    const { addData } = mapForm()

    return {
      obj: {
        obj1: isProxy(object),
        obj2: isReactive(object),
        obj3: isReadonly(object)
      },
      reto: {
        obj1: isProxy(retObject),
        obj2: isReactive(retObject),
        obj3: isReadonly(retObject)
      },
      reta: {
        obj1: isProxy(retArray),
        obj2: isReactive(retArray),
        obj3: isReadonly(retArray)
      },
      myproxy: {
        obj1: isProxy(myret),
        obj2: isReactive(myret),
        obj3: isReadonly(myret)
      },
      myproxyReactive: {
        obj1: isProxy(myProxyReactive),
        obj2: isReactive(myProxyReactive),
        obj3: isReadonly(myProxyReactive)
      },
      readRet: {
        obj1: isProxy(readonly(retObject)),
        obj2: isReactive(readonly(retObject)),
        obj3: isReadonly(readonly(retObject))
      },
      addData, // 弹窗添加数据
      object,
      retObject,
      retArray,
      myret:Vue.toRaw(myret)
    }
  }
}
  