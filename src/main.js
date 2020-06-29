import Vue from 'vue'
import Pagination from './index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(Pagination)
}).$mount('#pagination')

