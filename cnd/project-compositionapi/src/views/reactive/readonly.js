const reactive = Vue.reactive
const readonly = Vue.readonly
const ref = Vue.ref
const toRef = Vue.toRef

const test = () => {
  // reactive 的对象，
  const retObject = reactive({
    name: 'jyk',
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  })

  const obj = {
    name: 'jyk',
    contacts: {
      QQ: 11111,
      phone: 123456789
    }
  }
  // js对象的只读响应式
  const readonlyObject = readonly(obj)

  // reactive 只读的代理
  const readonlyReactive = readonly(retObject)
  
  return {
    obj,
    readonlyObject,
    retObject,
    readonlyReactive
  }
}

/**
 * 定义 readonly ，看本质
 * 
*/
export default {
  name: 'reactive-readonly',
  template: `
    <div>
      展示 readonly <br>
      JavaScript 对象的只读代理：{{readonlyObject}} <br><br>
      reactive 的 只读代理：{{readonlyReactive}}  <br><br>
      reactive 对象：{{retObject}} <br><br>

      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    const {
      obj,
      readonlyObject,
      retObject,
      readonlyReactive
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
    // 可以影响readonlyObject.name的值，但是模板不会刷新
    obj.name = '修改对象原型的name'
    // 不会修改，有警告
    readonlyObject.name = '改只读纯对象的name'
    // 不会修改，有警告
    readonlyObject.contacts.QQ = 1232222
    // 不会修改，有警告
    readonlyReactive.name = '改只读reactive的name'
    // 不会修改，有警告
    readonlyReactive.contacts.QQ = 345
    // 可以修改 readonly代理的值，并且可以更新模板
    retObject.name = '改原型reactive的name'
    // 可以修改 readonly代理的值，并且可以更新模板
    retObject.contacts.QQ = 789
      // ref
      // refName.value = 'ref改的name'
      // refContacts.value.phone = 'ref改的 phone'
      // refQQ.value = 'ref改的11'

    }

    return {
      readonlyObject,
      readonlyReactive,
      retObject,
      update
    }
  }
}
  