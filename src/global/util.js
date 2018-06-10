export function to_string(data){
  return Object.prototype.toString.call(data);
}
export function is_object(data){
  return to_string(data) === '[object Object]';
}
export function is_date(data) {
  return to_string(data) === '[object Date]';
}
//时间对象转字符串
export function dateToStr(date=new Date(),format = 'yyyy-MM-dd'){
  if(!is_date(date)) return '';
  const z = {
    y:date.getFullYear(),
    M:date.getMonth() + 1,
    d:date.getDate(),
    h:date.getHours(),
    m:date.getMinutes(),
    s:date.getSeconds()
  };
  format = format.replace(/(M+|d+|h+|m+|s+)/g,function(str,match) {
    const value = z[match[0]] + '';
    return value.length < match.length ? '0' + value:value;
  });
  return format.replace(/y+/,function(str) {
    return (z.y+'').slice(-str.length);
  })
}

//时间对象转时间戳(秒)
export function datetoUnix(date=new Date()){
  return Math.floor(date.getTime() / 1000);
}

export function strtoUnix(str,is_start){
  const date = new Date(str);
  if(is_start){
    const dateStr = dateToStr(date,'yyyy-MM-dd 00:00');
    return strtoUnix(dateStr);
  } else {
    return datetoUnix(date);
  }
}
