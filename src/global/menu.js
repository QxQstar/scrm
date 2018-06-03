const topMenu = [
  {
    name:'通知',
    value:'notice',
    icon:'iconfont icon-icon_notice',
    link:'/notice'
  },
  {
    name:'建议反馈',
    value:'suggest',
    icon:'icon-fankuizhongxinon iconfont'
  },
  {
    name:'退出',
    value:'quit',
    icon:'icon-qiehuanzuhu iconfont',
  }
];
const leftMenu = [
  {
    name:'我的工作台',
    icon:'iconfont icon-wodegongzuotai',
    link:'/home'
  },
  {
    name:'销售管理',
    icon:'iconfont icon-gaiicon-',
    children:[
      {
        link:'/sellManage/contact',
        name:'联系人管理'
      },
      {
        link:'/sellManage/client',
        name:'客户管理'
      },
      {
        link:'/sellManage/visit',
        name:'访客管理'
      },
      {
        link:'/sellManage/transaction',
        name:'交易管理'
      },
      {
        link:'/sellManage/product',
        name:'产品库'
      },
      {
        link:'/sellManage/prove',
        name:'单证管理'
      }
    ]
  }
];
export {topMenu,leftMenu};
