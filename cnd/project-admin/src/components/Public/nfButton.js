export default {
  name:'button',
  template: '',
  setup () {
    const click = (btnId) => {
      console.log(btnId)
    }

    return {
      click
    }
  }

}