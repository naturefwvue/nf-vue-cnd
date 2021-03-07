const reactive = Vue.reactive

import { person, personReactive } from './person.js'

/**
 * 定义 reactive ，看本质
 * 定义 浅层响应 ，看本质
 * 标记 不响应
*/
export default {
  name: 'reactive-reactive',
  template: `
    <div>
      展示 reactive <br>
      js 对象：{{person}} <br><br>
      reactive 对象：{{personReactive}} <br><br>
      reactive 的name属性：{{personReactive.name}} <br><br>
      reactive 的contacts属性 的 QQ属性：{{personReactive.contacts.QQ}} <br><br>
   
      单独的 name：{{name}} （没有相应）<br><br>
      单独的 contacts：{{contacts}} （有响应） <br><br>
   
      reactive 数组：{{reactiveArray}} <br><br>

      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    // js对象
    console.log('person', person)
    // 对象的 reactive 代理
    console.log('personReactive', personReactive)

    // 获取属性 
    const name = personReactive.name // 没有相应性
    const contacts = personReactive.contacts // 有相应性

    // reactive 的数组
    const reactiveArray = reactive([
      {
        name: 'jyk',
        age: 18
      },
      {
        name: 'jyk111',
        age: 19
      }
    ])

    const update = () => {
      // object1.name = '对象1' + Math.random()
      // object2.name = '对象2'
      // retObject1.name = 'reactive1'
      // retObject2.name = 'reactive2'
      // retObject2.contacts.QQ = 123 +  Math.random()
      // retArray,
      Object.assign(retObject1, {name: '合并', age: 111, newp: '新属性'})

      // retArray.length = 0 // 容易照成闪烁
      setTimeout(() => {
        const newArray = [
          { name: '11', age: 18 },
          { name: '22', age: 18 },
          { name: '33', age: 18 }
        ]
        // 可以防止闪烁
        retArray.length = 0
        retArray.push(...newArray)
      }, 1000);

    }

    return {
      person,
      personReactive,
      name,
      contacts,
      reactiveArray,
      update
    }
  }
}
  