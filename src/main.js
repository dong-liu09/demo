// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vue-ydui/dist/ydui.rem.css'/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import 'vant/lib/index.css';
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
 
Vue.use(VueClipboard)

import axios from 'axios'
Vue.prototype.$axios = axios

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
Vue.use(YDUI);

import Vant from 'vant';



Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
