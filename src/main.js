import Pagination from './components/Pagination.vue'

Pagination.install = (Vue) => {
  Vue.component(Pagination.name, Pagination)
}

export default Pagination


// import Vue from 'vue'
// import Pagination from './components/Pagination.vue'

// Vue.config.productionTip = false


// new Vue({
//   render: h => h(Pagination)
// }).$mount('#pagination')

