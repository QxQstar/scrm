const time = [
  {
    label:'0-3天',
    value:1
  },
  {
    label:'4-7天',
    value:2
  },
  {
    label:'8-14天',
    value:3
  },
  {
    label:'15-30天',
    value:4
  },
  {
    label:'30-60天',
    value:5
  },
  {
    label:'60天以上',
    value:6
  }
];
const star = [
  {
    label:'零星',
    value:1
  },
  {
    label:'一星',
    value:2
  },
  {
    label:'二星',
    value:3
  },
  {
    label:'三星',
    value:4
  },
  {
    label:'四星',
    value:5
  },
  {
    label:'五星',
    value:6
  }
];
const lifecycle = [
  {
    label:'新建客户',
    value:1
  },
  {
    label:'潜在客户',
    value:2
  },
  {
    label:'新成交客户',
    value:3
  },
  {
    label:'返单客户',
    value:4
  },
  {
    label:'衰退客户',
    value:5
  }
];
 const tag = [
  {
    label:'关键决策人',
    value:1
  },
  {
    label:'辅助决策人',
    value:2
  },
  {
    label:'决策执行人',
    value:3
  },
  {
    label:'常用即时聊天',
    value:4
  },
  {
    label:'社交活跃',
    value:5
  }
];
const contact = [
  {
    contact_id:1,
    first_name:'李',
    last_name:'花花',
    sex:1,// 1:男，2:女，0:未知
    age:20,
    birth:'1992-09-01',
    country:'中国',
    region:'亚洲',
    city:'北京',
    street:'阿凡达和街',
    postcode:123456,
    my_level:3,
    sys_level:3,
    radar:[2,3,4,6,7],
    lifecycle:{
      value:1,
      option:'新建客户'
    },
    tags:[
      {
        tag_id:1,
        tag_name:'健身达人'
      },
      {
        tag_id:2,
        tag_name:'IT达人'
      }
    ],
    email:['1395555@qq.com','344444333@163.com'],
    mobile:['13512345678','15612345678'],
    phone:['5677123'],
    WhatsApp:'1345123444',
    Skype:'244555',
    Facebook:'24455566',
    Facebook_num:23,
    Twitter:'234556fff',
    Twitter_num:34,
    Linkedin:'errr.ff44',
    create_time:1528214400,
    modify_time:1528224400,
    allot_time:1528213400,
    transfer_time:0,
    transfer_days:0,
    follow_member:1,
    last_contact_time:1528224400,
    last_active_time:1528224400,
    from:[
      {
        value:2,
        option:'SCRM系统'
      }
    ],
    visit_pages:3,
    visit_num:2,
    visit_first_time:1528114400,
    visit_last_time:1528214400,
    visit_from:[
      {
        value:1,
        option:'自然搜索'
      }
    ],
    position:'总经理',
    customer:''
  }
];
const all_cols = [
  {
    key:'sex',
    name:'性别'
  },
  {
    key:'age',
    name:'年龄'
  },
  {
    key:'birth',
    name:'生日'
  },
  {
    key:'region',
    name:'区域'
  },
  {
    key:'city',
    name:'城市'
  },
  {
    key:'street',
    name:'街道地址'
  },
  {
    key:'postcode',
    name:'邮编'
  },
  {
    key:'my_level',
    name:'我的评级'
  },
  {
    key:'radar',
    name:'雷达图'
  },
  {
    key:'WhatsApp',
    name:'WhatsApp'
  },
  {
    key:'Skype',
    name:'Skype'
  },
  {
    key:'Facebook',
    name:'Facebook'
  },
  {
    key:'Facebook_num',
    name:'Facebook好友数'
  },
  {
    key:'Twitter',
    name:'Twitter'
  },
  {
    key:'Twitter_num',
    name:'Twitter关注数'
  },
  {
    key:'Linkedin',
    name:'Linkedin'
  },
  {
    key:'create_time',
    name:'创建日期'
  },
  {
    key:'modify_time',
    name:'最后更新日期'
  },
  {
    key:'allot_time',
    name:'分配时间'
  },
  {
    key:'transfer_time',
    name:'转化日期'
  },
  {
    key:'transfer_days',
    name:'转化天数'
  },
  {
    key:'visit_pages',
    name:'网站访问页面数'
  },
  {
    key:'visit_num',
    name:'网站访问次数'
  },
  {
    key:'visit_first_time',
    name:'网站首次访问时间'
  },
  {
    key:'visit_last_time',
    name:'网站最后访问时间'
  },
  {
    key:'visit_from',
    name:'网站访问来源'
  },
  {
    key:'avator',
    name:'头像'
  },
  {
    key:'name',
    name:'姓名',
    sortable:true
  },
  {
    key:'customer',
    name:'所属客户'
  },
  {
    key:'position',
    name:'职位'
  },
  {
    key:'country',
    name:'国家'
  },
  {
    key:'email',
    name:'邮箱'
  },
  {
    key:'phone',
    name:'手机号'
  },
  {
    key:'mobile',
    name:'手机号'
  },
  {
    key:'sys_level',
    name:'系统评级'
  },
  {
    key:'lifecycle',
    name:'生命周期'
  },
  {
    key:'tags',
    name:'标签'
  },
  {
    key:'last_active_time',
    name:'最新动态'
  },
  {
    key:'last_contact_time',
    name:'最近联系'
  },
  {
    key:'follow_member',
    name:'跟进人'
  }
];
const tab_cols = [
  {
    key:'avator',
    name:'头像'
  },
  {
    key:'name',
    name:'姓名',
    sortable:true
  },
  {
    key:'customer',
    name:'所属客户'
  },
  {
    key:'position',
    name:'职位'
  },
  {
    key:'country',
    name:'国家'
  },
  {
    key:'email',
    name:'邮箱'
  },
  {
    key:'phone',
    name:'手机号'
  },
  {
    key:'mobile',
    name:'手机号'
  },
  {
    key:'sys_level',
    name:'系统评级'
  },
  {
    key:'lifecycle',
    name:'生命周期'
  },
  {
    key:'tags',
    name:'标签'
  },
  {
    key:'last_active_time',
    name:'最新动态'
  },
  {
    key:'last_contact_time',
    name:'最近联系'
  },
  {
    key:'follow_member',
    name:'跟进人'
  }
];
export function getTime() {
  return time;
}
export function getStar(){
  return star;
}
export function getLifecycle(){
  return lifecycle;
}
export function getTag(){
  return tag;
}

export function getContact(param){
  return contact
}
