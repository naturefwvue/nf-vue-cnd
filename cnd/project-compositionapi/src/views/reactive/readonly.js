const reactive = Vue.reactive
const readonly = Vue.readonly
const ref = Vue.ref
const toRef = Vue.toRef

const test = () => {
  // js对象的只读响应式
  const readonlyObject = readonly({
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  // reactive 的对象，
  const retObject = reactive({
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  // reactive 只读的代理
  const readonlyReactive = readonly(retObject)
  
  return {
    readonlyObject,
    readonlyReactive,
    retObject
  }
}

/**
 * 定义 readonly ，看本质
 * 
*/
export default {
  name: 'reactive-readonly',
  template: ``,
  setup () {
    const {
      readonlyObject,
      readonlyReactive,
      retObject
    } = test()

    console.log('readonlyObject', readonlyObject)
    console.log('readonlyReactive', readonlyReactive)
    console.log('retObject', retObject)
    
    // 用ref破坏只读性
    const refName = toRef(readonlyObject, 'name')
    const refContacts = toRef(readonlyObject, 'contacts')
    const refQQ = toRef(refContacts.value, 'QQ')

    // 修改数据
    const update = () => {
      readonlyObject.name = '改只读对象的name'
      readonlyObject.contacts.QQ = 123
      readonlyReactive.name = '改只读reactive的name'
      readonlyReactive.contacts.QQ = 345
      retObject.name = '改原型reactive的name'
      retObject.contacts.QQ = 789
      // ref
      refName.value = 'ref改的name'
      refContacts.value.phone = 'ref改的 phone'
      refQQ.value = 'ref改的11'

    }

    return {
      readonlyObject,
      readonlyReactive,
      retObject,
      update
    }
  }
}
  