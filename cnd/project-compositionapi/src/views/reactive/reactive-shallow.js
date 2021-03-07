const reactive = Vue.reactive

import { person, personReactive } from './person.js'

/**
 * 定义 reactive ，看本质
 * 定义 浅层响应 ，看本质
 * 标记 不响应
*/
export default {
  name: 'reactive-shallowReactive',
  template: `
    <div>
      展示 shallowReactive <br>
      js 单层对象：{{object1}} <br><br>
      reactive 单层对象：{{retObject1}} <br><br>
      reactive 单独的name：{{name}} <br><br>
      reactive 属性的name：{{retObject2.name}} <br><br>
      reactive 深层对象QQ：{{retObject2.contacts.QQ}} <br><br>
      reactive 数组：{{retArray}} <br><br>

      <el-button @click="update" type="primary">修改状态</el-button>
    </div>
  `,
  setup () {
    // js对象
    console.log('person', person)
    // 对象的 reactive 代理
    console.log('personReactive', personReactive)

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
      update
    }
  }
}
  