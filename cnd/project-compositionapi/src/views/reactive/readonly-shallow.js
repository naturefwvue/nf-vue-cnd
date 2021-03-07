import { 
  person, // object 对象
  objectReactive, // 普通的 object  的 reactive 代理
  objectShallowReadonly, // reactive 的 readonly 代理
  reactiveShallowReadonly // 普通的 object 的 readonly 代理
} from './person.js'

/**
 * 定义 shallowReadonly
 * 
*/
export default {
  name: 'reactive-shallowReadonly',
  template: `
    <div>
      展示 shallowReadonly <br>
      object 的只读代理：{{objectShallowReadonly}} <br><br>
      reactive 的 只读代理：{{reactiveShallowReadonly}}  <br><br>
      reactive 对象：{{objectReactive}} <br><br>

      <el-button @click="update" type="primary">修改属性</el-button>
    </div>
  `,
  setup () {
    // 查看 readonly 实例结构
    console.log('object 的 objectShallowReadonly')
    console.log(objectShallowReadonly)
    console.log('reactive 的 reactiveShallowReadonly')
    console.log(reactiveShallowReadonly)
   
    // 修改数据
    const update = () => {

    }

    return {
      objectShallowReadonly,
      reactiveShallowReadonly,
      objectReactive,
      update
    }
  }
}
  