
export default {
  name: 'page',
  template: '',
  setup () {
    const currentPage = Vue.ref(2)
    const currentChange = (currPager) => {
      console.log('currPager', currPager)
    }
    return {
      currentPage,
      currentChange
    }
  }

}