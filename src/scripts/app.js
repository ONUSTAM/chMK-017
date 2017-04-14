// plugins
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
// vue
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// Style
import '../styles/app.scss'

import bootstrap from 'bootstrap-sass'
import bootstrapSelect from 'bootstrap-select'

// root
import App from './view/App.vue'
// architect
import store from './vuex'
// pages
import routes from './router/index'
// filter
import * as filter from './filter'

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    // 望みのポジションを返す
    console.log(to, from, savedPosition);
    return { x: 0, y: 0 }
  }
})
Vue.use(VueRouter)

// set filter
_.each(filter.config(), function(val, key){
  Vue.filter(val, filter[val])
})

var app = new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
