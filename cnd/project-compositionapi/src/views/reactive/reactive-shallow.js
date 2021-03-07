
import { person, objectShallowReactive } from './person.js'

/**
 * 定义 shallowReactive  
*/
export default {
  name: 'reactive-shallowReactive',
  template: `
    <div>
      展示 shallowReactive <br>
      shallowReactive 对象：{{objectShallowReactive}} <br><br>
      shallowReactive 的name属性：{{objectShallowReactive.name}} （有响应） <br><br>
      shallowReactive 的contacts属性 的 QQ属性：{{objectShallowReactive.contacts.QQ}} （没有相应） <br><br>
   
      单独的 name：{{name}} （没有相应）<br><br>
      单独的 contacts：{{contacts}} （没有响应） <br><br>
   
      <el-button @click="update" type="primary">修改属性</el-button>
    </div>
  `,
  setup () {
    // 查看 shallowReactive 实例结构
    console.log('shallowReactive', objectShallowReactive)
    // 获取嵌套对象属性
    const contacts = objectShallowReactive.contacts
    // 因为浅层，所以没有响应性
    console.log('contacts属性：', contacts)
    // 获取简单类型的属性
    let name = objectShallowReactive.name 
    // 属性是简单类型的，所以失去响应性
    console.log('name属性：', name) 

    const update = () => {
      // 修改原型
      person.name = '修改原型的name' +  Math.random()
      
      // 修改属性
      objectShallowReactive.name = '设置代理的name属性' // +  Math.random()
      objectShallowReactive.contacts.QQ = 123 +  Math.random()
      
      // 修改结构的属性
      name = '设置解构的name属性' +  Math.random()
      contacts.QQ = 123 +  Math.random()
    }

    return {
      person, // js对象
      objectShallowReactive, // perosn 套上 reactive
      name, // 结构的name属性
      contacts, // 结构的对象属性
      update // 修改属性
    }
  }
}
  