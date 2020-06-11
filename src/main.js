import Vue from 'vue'
import Pagination from './components/Pagination.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Pagination),
}).$mount('#pagination')

export default Pagination
/* eslint-disable */
