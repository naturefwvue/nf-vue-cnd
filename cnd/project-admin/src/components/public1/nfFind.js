
export default {
  name: 'find',
  template: '',
  setup () {
    const formInline = Vue.reactive({
      user: '',
      region: ''
    })

    const onSubmit = () => {
      console.log('submit!')
    }

    return {
      formInline,
      onSubmit
    }
  }

}