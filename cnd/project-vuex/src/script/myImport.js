// 同步加载的方式
const myImport2 = (url) => {
  return new Promise((resolve, reject) => {
    const ver = window.__ver || ''
    const baseUrl = window.__basrUrl || '/src/'
    Promise.all([
      axios.get(baseUrl + url + '.html' + ver),
      import(baseUrl + url + '.js' + ver)
    ]).then((req) => {
      resolve({
        template: req[0].data,
        props: req[1].default.props,
        setup: req[1].default.setup
      })
    })
  })
}

// 加载html和js
const myImport = (url) => {
  return new Promise((resolve, reject) => {
    const ver = window.__ver || ''
    const baseUrl = window.__basrUrl || '/src/'
    // 先加载js
    import(baseUrl + url + '.js' + ver).then((resjs) => {
      const js = resjs.default
      if (js.template === '') {
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

export default myImport