const reactive = Vue.reactive

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

export default {
  name: 'reactive-log',
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
    
    const myret = myReactive(retObject)
    console.log('myret', myret)

    setTimeout(() => {
      retObject.name = 'retObject'
      // myret.name = 'myret2222'
      console.log('myret - settimeout', myret)
      console.log('retObject - settimeout', retObject)
    },2000)

    const { addData } = mapForm()

    return {
      addData, // 弹窗添加数据
      object,
      retObject,
      retArray,
      myret:Vue.toRaw(myret)
    }
  }
}
  