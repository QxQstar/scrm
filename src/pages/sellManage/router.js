export default {
  name:'sellManage',
  path:'/sellManage',
  redirect:'/sellManage/contact',
  component:() => import(/* webpackChunkName: "sellManage" */'./index.vue'),
  children:[
    {
      path:'contact/:page?',
      component:() => import(/* webpackChunkName: "sellManage" */'./contact/index.vue'),
    }
  ]
}
