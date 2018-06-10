import {dateToStr,strtoUnix,unixtoStr} from '@/global/util.js';

export function getTime(v){
  const date = new Date(),
    dateStr = dateToStr(date,'yyyy-MM-dd 00:00'),
    //今天0点的时间戳
    unix = strtoUnix(dateStr);
    switch (v + '') {
      //0-3天
      case '1':
        return unixtoStr(unix - 3 * 24 * 60 *60,'yyyy.MM.dd') + '-' + dateToStr(date,'yyyy.MM.dd');
      //  4-7天
      case '2':
        return unixtoStr(unix - 7 * 24 * 60 *60,'yyyy.MM.dd') + '-' + unixtoStr(unix - 4 * 24 * 60 *60,'yyyy.MM.dd');
      // 8-14天
      case '3':
        return unixtoStr(unix - 14 * 24 * 60 *60,'yyyy.MM.dd') + '-' + unixtoStr(unix - 8 * 24 * 60 *60,'yyyy.MM.dd');
      //  15-30天
      case '4':
        return unixtoStr(unix - 30 * 24 * 60 *60,'yyyy.MM.dd') + '-' + unixtoStr(unix - 15 * 24 * 60 *60,'yyyy.MM.dd');
      //  30-60天
      case '5':
        return unixtoStr(unix - 60 * 24 * 60 *60,'yyyy.MM.dd') + '-' + unixtoStr(unix - 30 * 24 * 60 *60,'yyyy.MM.dd');
      //  60天以上
      case '6':
        return '开始' + '-' + unixtoStr(unix - 60 * 24 * 60 *60,'yyyy.MM.dd');

    }

}
