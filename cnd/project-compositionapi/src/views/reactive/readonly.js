
import { 
  person, // object 对象
  objectReactive, // object  的 reactive 代理
  reactiveReadonly, // reactive 的 readonly 代理
  objectReadonly // object 的 readonly 代理
} from './person.js'

/**
 * 展示 readonly
 * 
*/
export default {
  name: 'reactive-readonly',
  template: `
    <div>
      展示 readonly <br>
      js 对象的只读代理：{{objectReadonly}} <br><br>
      reactive 的 只读代理：{{reactiveReadonly}}  <br><br>
      reactive 对象：{{objectReactive}} <br><br>

      <el-button @click="update" type="primary">修改属性</el-button>
    </div>
  `,
  setup () {
    // 查看 readonly 实例结构
    console.log('object 的readonly')
    console.log(objectReadonly)
    console.log('reactive 的readonly')
    console.log(reactiveReadonly)

    // 获取嵌套对象属性
    const contacts = reactiveReadonly.contacts
    console.log('contacts属性：', contacts) // 因为深层响应，所以依然有响应性
    // 获取简单类型的属性
    let name = reactiveReadonly.name 
    console.log('name属性：', name) // 属性是简单类型的，所以失去响应性

    // 修改数据
    const update = () => {
      // 可以影响readonlyObject.name的值，但是模板不会刷新
      person.name = '修改对象原型的name'
      // 不会修改，有警告
      objectReadonly.name = '改只读纯对象的name'
      // 不会修改，有警告
      objectReadonly.contacts.QQ = 1232222
      // 不会修改，有警告
      reactiveReadonly.name = '改只读reactive的name'
      // 不会修改，有警告
      reactiveReadonly.contacts.QQ = 345
      // 可以修改 readonly代理的值，并且可以更新模板
      person.name = '改原型reactive的name'
      // 可以修改 readonly代理的值，并且可以更新模板
      person.contacts.QQ = 789

    }

    return {
      person,
      objectReactive,
      reactiveReadonly,
      objectReadonly,
      update
    }
  }
}
  