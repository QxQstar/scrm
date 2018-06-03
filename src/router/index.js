import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/components/layout/layout.vue';

const routerContext = require.context('@/pages',true,/router\.js/);
const routerArr = routerContext.keys(routerContext).map(key =>  routerContext(key).default);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scrm',
      component: layout,
      children:routerArr
    }
  ]
})
