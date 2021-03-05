const reactive = Vue.reactive
const shallowReactive = Vue.shallowReactive
const markRaw = Vue.markRaw

const test = () => {
  // js对象，单层
  const object1 = {
    name: 'jyk',
    age: 18
  }

  // js对象，深层
  const object2 = {
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  }

  // reactive 的对象，单层
  const retObject1 = reactive({
    name: 'jyk',
    age: 18
  })

  // reactive 的对象，深层
const retObject2 = reactive({
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

  // 浅层响应
  const shallowRet1 = shallowReactive({
    name: 'jykshallow',
    age: 18
  })
  // 浅层响应
  const shallowRet2 = shallowReactive({
    name: 'jykshallow',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  // 标记不响应
  const markRawObject = markRaw({
    name: 'jyk'
  })
  const markRawReactive = markRaw(markRawObject)

  return {
    object1,
    object2,
    retObject1,
    retObject2,
    retArray,
    shallowRet1,
    shallowRet2,
    markRawObject,
    markRawReactive
  }
}

import mapForm from '/src/store/map-form.js'

/**
 * 定义 reactive ，看本质
 * 定义 浅层响应 ，看本质
 * 标记 不响应
*/
export default {
  name: 'reactive-log',
  template: ``,
  setup () {
    const {
      object1,
      object2,
      retObject1,
      retObject2,
      retArray,
      shallowRet1,
      shallowRet2,
      markRawObject,
      markRawReactive
    } = test()

    // 原生对象
    console.log('object1', object1)
    console.log('object2', object2)
    // reactive
    console.log('retObject1', retObject1)
    console.log('reactive', retObject2)
    const contacts = retObject2.contacts
    console.log('contacts属性：', contacts)
    const name = retObject2.name
    console.log('name属性：', name)
    // 浅层响应
    console.log('shallowRet1', shallowRet1)
    console.log('shallowReactive', shallowRet2)
    console.log('contacts属性：', shallowRet2.contacts)
    // 数组
    console.log('retArray', retArray)
    // 标记
    console.log('markRawObject', markRawObject)
    console.log('markRawReactive', markRawReactive)

    const { updateData } = mapForm()

    const update = () => {
      // object1.name = '对象1' + Math.random()
      // object2.name = '对象2'
      // retObject1.name = 'reactive1'
      // retObject2.name = 'reactive2'
      // retObject2.contacts.QQ = 123 +  Math.random()
      // retArray,
      // shallowRet1.name = 'shallow浅层name'
      // shallowRet2.name = 'shallow深层响应name' // + Math.random()
      shallowRet2.contacts.QQ = Math.random()
      // markRawObject.name = '原对象标记不响应'
      // markRawReactive.name = 'reactive标记不响应'
    }

    return {
      name,
      updateData,
      object1,
      object2,
      retObject1,
      retObject2,
      retArray,
      shallowRet1,
      shallowRet2,
      markRawObject,
      markRawReactive,
      update
    }
  }
}
  