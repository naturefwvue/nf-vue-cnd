const toRaw = Vue.toRaw

import { 
  person, // object 对象
  objectReactive, // 普通的 object  的 reactive 代理
  objectShallowReactive, // reactive 的 shallowReactive 代理
  objectReadonly, // 普通的 object 的 readonly 代理
  objectShallowReadonly
} from './person.js'

import indexedDB from '../../script/nf-indexedDB.js'

/**
 * toRaw 取原型
 * 序列化
 * 存储
*/
export default {
  name: 'reactive-toRaw',
  template: `
    <div>
      展示 toRaw <br>

      <el-button @click="update" type="primary">修改属性</el-button>

    </div>
  `,
  setup () {

    const { setup, addObject} = indexedDB()

    console.log('reacive 的原型', toRaw(objectReactive))
    console.log('shallowReactive 的原型', toRaw(objectShallowReactive))
    console.log('readonly 的原型', toRaw(objectReadonly))
    console.log('shallowReadonly 的原型', toRaw(objectShallowReadonly))
    
    // 转为json
    const json1 = JSON.stringify(person)
    console.log('json1', json1)
    const json2 = JSON.stringify(toRaw(objectReactive))
    console.log('json2', json2)
    const json3 = JSON.stringify(objectReactive)
    console.log('json3', json3)
    
    // 保存到 
    const update = () => {
      const storage = window.sessionStorage
      //写入 reactive
      storage['test-reactive'] = objectReactive
      storage['test-json'] = json3
      // 直接存入 indexedDB会报错
      // addObject('reactive', objectReactive)
      // 存入原型
      addObject('reactive', toRaw(objectReactive))
      
    }

    return {
      objectReactive,
      objectReadonly,
      update
    }
  }
}
  