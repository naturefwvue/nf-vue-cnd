const reactive = Vue.reactive
const toRaw = Vue.toRaw

const test = () => {
  // js对象，深层
  const object = {
    id: 111,
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  }

  // reactive 的对象，深层
  const retObject = reactive({
    id: 111,
    name: 'jyk',
    age: 18,
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  
  return {
    object,
    retObject
  }
}

import indexedDB from '../../script/nf-indexedDB.js'

/**
 * toRaw 取原型
 * 序列化
 * 存储
*/
export default {
  name: 'reactive-toRaw',
  template: ``,
  setup () {
    const {
      object,
      retObject
    } = test()

    const { setup, addObject} = indexedDB()

    // 原生对象
    console.log('object', object)
    console.log('retObject', retObject)

    // 转为json
    const json1 = JSON.stringify(object)
    console.log('json1', json1)
    const json2 = JSON.stringify(toRaw(retObject))
    console.log('json2', json2)
    const json3 = JSON.stringify(retObject)
    console.log('json3', json3)
    
    // 保存到 
    const update = () => {
      const storage = window.sessionStorage
      //写入 reactive
      storage['test-reactive'] = retObject
      storage['test-json'] = json3
      // 直接存入 indexedDB会报错
      // addObject('reactive', retObject)
      // 存入原型
      addObject('reactive', toRaw(retObject))
      
    }

    return {
      object,
      retObject,
      update
    }
  }
}
  