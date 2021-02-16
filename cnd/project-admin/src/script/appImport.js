// 直接放在Window里面好了。。。
window.myImport = (url) => {
  return new Promise((resolve, reject) => {
    const ver = window.__ver || ''
    const baseUrl = window.__basrUrl || '/src/'
    // 先加载js
    import(baseUrl + url + '.js' + ver).then((resjs) => {
      const js = resjs.default
      if (typeof(js.template) === 'undefined' || js.template === '') {
        // 如果模板是空的，表示需要加载html作为模板
        axios.get(baseUrl + url + '.html' + ver).then((resHTML) => {
          js.template = resHTML.data
          resolve(js)
        })
      } else {
        // 否则直接使用js注册组件
        resolve(js)
      }
    })
  })
}
