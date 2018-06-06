const time = [
  {
    label:'近三天',
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
let tag = [
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
const follow = [
  {
    value:1,
    label:'李四'
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
export function getFollow(){
  return follow;
}
