const watch = Vue.watch

import { person, personReactive, objectReactive } from '../reactive/person.js'

/**
 * watch 监听
 * 
*/
export default {
  name: 'watch-watch',
  template: `
    <div>
      展示 watch <br>
      js 对象：{{ personReactive }} <br><br>

      <el-button @click="update" type="primary">修改属性</el-button><br><br>
    </div>
  `,
  setup () {
    // 查看 reactive 实例结构
    console.log('reactive', personReactive)
    // 获取嵌套对象属性

    // 监听属性
    watch(() =>  personReactive.name, (v1,v2) => {
      console.log('name改变了', v1)
    })

    // 监听对象
    watch(() =>  personReactive, (v1,v2) => {
      console.log('改变了', v1)
    },
    {
      deep:true
    })

    const update = () => {
      personReactive.name = '改变' + Math.random()
      personReactive.contacts.QQ = Math.random()
    }

    return {
      person, // js对象
      personReactive, // perosn 套上 reactive
      objectReactive, // {} 套上 reactive
      update // 修改属性
    }
  }
}
  