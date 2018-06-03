export default {
  name:'home',
  path:'/home',
  component:() => import(/* webpackChunkName: "home" */'./index.vue')
}
