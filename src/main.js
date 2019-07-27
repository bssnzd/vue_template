// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import 'font-awesome/css/font-awesome.css'

import store from "@/core/store"

// import "@/common/css/index.scss"

// 1.引入core.config.js

import core from "@/core/core.config"
// 2. core.里面暴露一个函数
// 3. ues会吧全局的 Vue构造函数传进去
Vue.use(core);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
