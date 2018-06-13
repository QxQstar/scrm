<template>
  <div class="m-show-filed" :class='filed'>
    <!--基本信息-->
    <div class="item"  v-if="filed === 'my_base_msg'">
      <!--头像-->
      <div class="img  my-col">
        <img :src="data.avator ? data.avator : '/static/img/default_avator.jpg'"/>
      </div>
      <div class="msg my-col">
        <p class="name">{{data.first_name + data.last_name}}</p>
        <p v-if="data.customer">{{data.customer}}</p>
        <p v-if="data.position">{{data.position}}</p>
      </div>
    </div>
    <!--联系方式-->
    <div v-else-if="filed === 'contact_methods'">
      <template v-for="contact,key in contact_methods" v-if="contact.length > 0">
        <el-tooltip placement="bottom-start" v-if="contact.length > 1">
          <div slot="content">
            <p v-for="value in contact">{{value}}</p>
          </div>
          <p class="custor" :class="key">{{contact[0]}}</p>
        </el-tooltip>
        <p v-else :class="key">{{contact[0]}}</p>
      </template>
    </div>
    <!--my_level-->
    <div v-else-if="filed === 'my_level' || filed === 'sys_level'">
      <el-rate
        v-model="data[filed]"
        disabled
        text-color="#ff9900">
      </el-rate>
    </div>
    <!--radar-->
    <div v-else-if="filed === 'radar'">radar</div>
    <div v-else-if="filed === 'last_contact_time'">last_contact_time</div>
    <div v-else-if="filed === 'last_active_time'">last_active_time</div>
    <!--时间-->
    <div v-else-if="filed.indexOf('time') >= 0">{{data[filed] | unixtoStr}}</div>
    <div v-else-if="filed === 'tags'">
      <el-tooltip placement="bottom-start" v-if="data[filed].length > 1">
        <div slot="content">
          <p v-for="item in data[filed]">{{item.tag_name}}</p>
        </div>
        <p class="custor tag">{{data[filed][0].tag_name}}</p>
      </el-tooltip>
      <p class="tag" v-else>{{data[filed][0].tag_name}}</p>
    </div>
    <div v-else-if="filed === 'lifecycle'">{{data[filed].option}}</div>
    <div v-else>{{data[filed]}}</div>
  </div>
</template>

<script>
  import {unixtoStr} from '@/global/util.js'
  export default {
    name: "show-filed",
    props:{
      data:{
        type:Object,
        default(){
          return {}
        }
      },
      filed:{
        type:String,
        default:''
      }
    },
    computed:{
      contact_methods(){
        return {
          email:this.data.email,
          mobile:this.data.mobile,
          phone:this.data.phone
        }
      }
    },
    filters:{
      unixtoStr:function(value){
        return unixtoStr(value);
      }
    }
  }
</script>

<style lang="less" scoped>
  .m-show-filed{
    font-size: 12px;
    color: #262626;
    .custor{
      cursor: pointer;
    }
    &.my_base_msg{
      display: table;
      width: 100%;
      table-layout: fixed;
      .item{
        display: table-row;
        .my-col{
          display: table-cell;
          vertical-align: middle;
        }
        .img{
          border-radius: 50%;
          width: 45px;
          img{
            width: 40px;
            vertical-align: middle;
            border-radius: 50%;
          }
        }
        .msg{
          font-size: 12px;
          color: #8899a6;
          .name{
            color: #262626;
          }
        }
      }
    }
    &.contact_methods{
      .phone{
        color: #8899a6;
      }
    }
    &.tags{
      .tag{
        display: inline-block;
        padding: 1px 10px ;
       color: #8899a6;
        border-radius: 4px;
        background-color: #d0ebe2;
      }
    }
  }
</style>
