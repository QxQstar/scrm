import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/components/layout/layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scrm',
      component: layout
    }
  ]
})
