const reactive = Vue.reactive
const shallowReadonly = Vue.shallowReadonly
const toRef = Vue.toRef

const test = () => {
const obj = {
  name: 'jyk',
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
}

// reactive 的对象，
const retObject = reactive({
  name: 'jyk',
  contacts: {
    QQ: 11111,
    phone: 123456789
  }
})

// js对象的只读响应式
const shallowReadonlyObject = shallowReadonly(obj)

// reactive 只读的代理
const shallowReadonlyReactive = shallowReadonly(retObject)

  return {
    obj,
    shallowReadonlyObject,
    retObject,
    shallowReadonlyReactive
  }
}

/**
 * 定义 shallowReadonly ，看本质
 * 
*/
export default {
  name: 'reactive-shallowReadonly',
  template: `
    <div>
      展示 shallowReadonly <br>
      JavaScript 对象的只读代理：{{shallowReadonlyObject}} <br><br>
      shallowReadonly 的 只读代理：{{shallowReadonlyReactive}}  <br><br>
      reactive 对象：{{retObject}} <br><br>

      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    const {
      obj,
      shallowReadonlyObject,
      retObject,
      shallowReadonlyReactive
    } = test()

    console.log('shallowReadonlyObject', shallowReadonlyObject)
    console.log('shallowReadonlyReactive', shallowReadonlyReactive)
    console.log('retObject', retObject)
    
    // 用ref破坏只读性
    const refName = toRef(shallowReadonlyObject, 'name')
    const refContacts = toRef(shallowReadonlyObject, 'contacts')
    const refQQ = toRef(refContacts.value, 'QQ')

    // 修改数据
    const update = () => {
      // 可以影响readonlyObject.name的值，但是模板不会刷新
      obj.name = '修改对象原型的name'
      // 不会修改，有警告
      shallowReadonlyObject.name = '改只读纯对象的name'
      // 可以修改，没有警告，但是不会更新模板
      shallowReadonlyObject.contacts.QQ = 1232
      // 不会修改，有警告
      shallowReadonlyReactive.name = '改只读reactive的name'
      // 可以修改，没有警告，会更新模板
      shallowReadonlyReactive.contacts.QQ = 345
      // 可以修改 shallowReadonly 代理的值，并且可以更新模板
      retObject.name = '改原型reactive的name'
      // 可以修改 shallowReadonly 代理的值，并且可以更新模板
      retObject.contacts.QQ = 789
      // ref
      // refName.value = 'ref改的name'
      // refContacts.value.phone = 'ref改的 phone'
      // refQQ.value = 'ref改的11'

    }

    return {
      shallowReadonlyObject,
      shallowReadonlyReactive,
      retObject,
      update
    }
  }
}
  