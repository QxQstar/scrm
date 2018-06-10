// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index.js';
import {member_list} from './dataCenter/global/index.js';

//引入全局样式
import './assets/css/global.less';

import $ from 'jquery';
window.$ = window.jQuery = $;
//引入UI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//使用UI库
Vue.use(ElementUI);
//注册全局组件
import './components/common/index.js';
import './global/muse-ui.js';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    store.dispatch('base_member_list',member_list);
  }
});
