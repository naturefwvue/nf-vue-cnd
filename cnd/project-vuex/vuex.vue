<template>
  <div class="home">
    vuex 的尝试 <br>
    test: {{test}}<br>
    computedVuex: {{computedVuex}}<br>
    get2: {{get2}}<br>
    get: {{get}}<br>
    myRef: {{myRef2}}<br>
    $store：{{$store}}<br>
    <input type="button" @click="add()" value="计数++"> <br>
    <input type="button" @click="setItem('bbb')" value="修改 name 的值"> <br>
    <vuexTest/>
  </div>
</template>

<script>
import { ref, computed, getCurrentInstance } from 'vue'
import vuexTest from './vuex2'

// @ is an alias to /src

export default {
  name: 'vuex1',
  components: {
    vuexTest
  },
  setup (props, context) {
    const test = ref('vuex') // 显示值

    const { ctx } = getCurrentInstance()
    console.log('ctx', ctx)
    console.log('vuex1', ctx.$store.state.count)
    const computedVuex = computed(() => ctx.$store.state.count)
    console.log('computedVuex', computedVuex)

    // set 设置值
    const cc = ctx.$store.commit('increment')
    console.log('cc', cc)
    console.log('vuex2', ctx.$store.state.count)

    const get = ref('')
    get.value = ctx.$store.getters.doneTodos
    console.log('get', get)

    const get2 = ref('')
    get2.value = ctx.$store.getters.getTodoById(3)
    console.log('get2', get2)

    // ref 测试
    const myRef = ctx.$store.myRef
    console.log('myRef', myRef)
    const myRef2 = ctx.$store.getters.setMyRef
    console.log('myRef2', myRef2)

    const add = () => {
      ctx.$store.commit('setMyRef', 3)

      ctx.$store.commit('increment', 3)
      test.value = ctx.$store.state.count
      console.log('pp:', ctx.$store.state.myPromies)
      ctx.$store.state.myPromies.then((data) => {
        alert(data)
      })
    }

    ctx.$store.dispatch('add1', 10).then((data) => {
      // alert(data)
    })

    return {
      add,
      computedVuex,
      get,
      myRef,
      myRef2,
      test
    }
  }

}
</script>
