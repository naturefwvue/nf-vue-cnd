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

  return {
    object,
    retObject,
    retArray
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
      retArray
    } = test()

    console.log('object', object)
    console.log('retObject', retObject)
    console.log('retArray', retArray)
    
    const { updateData } = mapForm()

    return {
      updateData,
      object,
      retObject,
      retArray
    }
  }
}
  