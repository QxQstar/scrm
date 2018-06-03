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
        link:'/',
        name:'联系人管理'
      },
      {
        link:'/',
        name:'客户管理'
      },
      {
        link:'/',
        name:'访客管理'
      },
      {
        link:'/',
        name:'交易管理'
      },
      {
        link:'/',
        name:'产品库'
      },
      {
        link:'/',
        name:'单证中心'
      }
    ]
  }
];
export {topMenu,leftMenu};
