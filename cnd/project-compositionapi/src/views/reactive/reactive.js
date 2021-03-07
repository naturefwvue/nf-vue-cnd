const reactive = Vue.reactive

import { person, personReactive, objectReactive } from './person.js'

/**
 * reactive 的结构
 * 属性的深层响应性
 * 
*/
export default {
  name: 'reactive-reactive',
  template: `
    <div>
      展示 reactive <br>
      js 对象：{{person}} <br><br>
      reactive 对象：{{objectReactive}} <br><br>
      reactive 的name属性：{{objectReactive.name}} <br><br>
      reactive 的contacts属性 的 QQ属性：{{objectReactive.contacts.QQ}} <br><br>
   
      单独的 name：{{name}} （没有相应）<br><br>
      单独的 contacts：{{contacts}} （有响应） <br><br>
   
      reactive 数组：{{reactiveArray}} <br><br>

      <el-button @click="update" type="primary">修改属性</el-button><br><br>
      <el-button @click="setReactive" type="primary">整体赋值</el-button><br><br>
    </div>
  `,
  setup () {
    // 查看 reactive 实例结构
    console.log('reactive', personReactive)
    // 获取嵌套对象属性
    const contacts = personReactive.contacts
    console.log('contacts属性：', contacts) // 因为深层响应，所以依然有响应性
    // 获取简单类型的属性
    let name = personReactive.name 
    console.log('name属性：', name) // 属性是简单类型的，所以失去响应性

    // js对象
    console.log('person', person)

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
      // 修改原型
      person.name = '修改原型的name' +  Math.random()
      
      // 修改 person 的代理 属性
      personReactive.name = '修改person代理的name属性' +  Math.random()
      
      // 修改属性
      objectReactive.name = '设置代理的name属性' +  Math.random()
      objectReactive.contacts.QQ = 123 +  Math.random()
      
      // 修改结构的属性
      name = '设置解构的name属性' +  Math.random()
      contacts.QQ = 123 +  Math.random()
      // retArray
      // console.log('现在的person', person)
    }

    const setReactive = () => {
      // 直接赋值
      Object.assign(objectReactive, {name: '合并', age: 111, newp: '新属性'})
      // reactiveArray.length = 0 // 容易照成闪烁
      setTimeout(() => {
        const newArray = [
          { name: '11', age: 18 },
          { name: '22', age: 18 },
          { name: '33', age: 18 }
        ]
        // 可以防止闪烁
        reactiveArray.length = 0
        reactiveArray.push(...newArray)
      }, 1000);
    }

    return {
      person, // js对象
      personReactive, // perosn 套上 reactive
      objectReactive, // {} 套上 reactive
      name, // 结构的name属性
      contacts, // 结构的对象属性
      reactiveArray, // 数组的响应性
      update, // 修改属性
      setReactive // 直接设置
    }
  }
}
  