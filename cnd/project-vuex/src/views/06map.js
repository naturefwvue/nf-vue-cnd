
import map from './store/map.js?v=12'

export default {
    name: 'vuex_map',
    template: '',
    components: {
    },
    setup () {
      const value = Vue.ref('map')
  
      // 通过map 获取 count
      // 可以使用别名
      const {
        getCount: mapGetCount
      } = map()

      const mapCount = mapGetCount()
      return {
        value,
        mapCount
      }
    }
  }
  