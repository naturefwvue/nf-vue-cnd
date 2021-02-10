// 引入组件
import test from '../component/test.js?v=9'
import hello from '../component/test.js?v=7'
console.log('test-----', test)

const hh = import('../views/home.js?v=8'+'aa')
hh.then((data) =>{
  console.log('import返回的data', data)
  console.log('import返回的data', data.default)
})
console.log('hh-----', hh)

// test.template = '22' default

const demo = {
  template: `
  <h2>这是组件演示1111</h2>
  <test str="传入的参数22"></test>333<br>
  <asy str="动态组件传入的参数"></asy>
  `,
  components: {
    test,
    asy: Vue.defineAsyncComponent( () => 
      new Promise((resolve, reject) => {
        // axios加载模板
        setTimeout(() => {
          // alert('加载完毕。。')
          for (const key in test) {
            console.log('key:', key)
          }
          test.template = 'ssssss'
          resolve({
            props: test.props,
            template: '<br>动态组件参数：{{str1}}<br>动态组件外部函数：{{aa}}<br>',
            setup: test.setup
          })
        }, 100);
      })
    )
  },
  setup() {

    return {
    }
  }
}

/*
setTimeout(() => {
  demo.template = `
    <h2>这是组件演示1111</h2>
    <test str="传入的参数"></test>
  `
  alert('加载完毕')
}, 1000);
*/

export default demo