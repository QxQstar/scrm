export default {
  name:'sellManage',
  path:'/sellManage',
  redirect:'/sellManage/contact',
  component:() => import(/* webpackChunkName: "sellManage" */'./index.vue'),
  children:[
    {
      path:':state',
      component:() => import(/* webpackChunkName: "sellManage" */'./list.vue'),
    }
  ]
}
