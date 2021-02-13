
const myImport = (url) => {
  return new Promise((resolve, reject) => {
    const ver = window.__ver || ''
    Promise.all([
      axios.get(url + '.html' + ver),
      import(url + '.js' + ver)
    ]).then((req) => {
      resolve({
        template: req[0].data,
        props: req[1].default.props,
        setup: req[1].default.setup
      })
    })
  })
}

export default myImport