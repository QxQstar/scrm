import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const modules = {};
const modulesContent = require.context('@/store',true,/\.store\.js/);
modulesContent.keys().forEach(key => {
  const mKey = key.replace('.store.js','').split('/')[2];
  modules[mKey] = modulesContent(key).default;
});
export default new Vuex.Store({
  modules:modules
})
