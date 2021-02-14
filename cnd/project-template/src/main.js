/*
import store from './store/index.js?v=28'
import router from './router/index.js?v=28'
import App from './app.js?v=28'


// 创建vue3的实例
const app = Vue.createApp(App)
  .use(store) // 挂载vuex
  .use(router) // 挂载路由
  .use(ElementPlus) // 加载ElementPlus
  .mount('#app') // 挂载Vue的app实例

*/

const ver = window.__ver || ''

Promise.all([
  import('./store/index.js' + ver),
  import('./router/index.js' + ver),
  import('./app.js' + ver),
]).then((res) => {
  // 创建vue3的实例
  const app = Vue.createApp(res[2].default)
    .use(res[0].default) // 挂载vuex
    .use(res[1].default) // 挂载路由
    .use(ElementPlus) // 加载ElementPlus
    .mount('#app') // 挂载Vue的app实例
})
