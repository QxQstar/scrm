<template>
  <div class="m-sellManage-list">
    <div class="m-header-top">
      <span class="info">共有{{total}}为联系人</span>
      <div class="f-fr">
        <el-input v-model="keyword"  size='mini' placeholder="关键字"/>
        <el-button size="mini">新增联系人</el-button>
      </div>
    </div>
    <!--筛选区域-->
    <filter-area v-model="filterParam" type='contact' :filterData="filterData"/>
  </div>
</template>

<script>
    import filterArea from './../components/filter-area.vue';
    import {getTime,getStar,getLifecycle,getTag} from '@/dataCenter/salesManage/contact.js';
    export default {
      data(){
        return {
          //联系人总数
          total:0,
          tb_data:[],
          keyword:'',
          //筛选参数
          filterParam:{
            time:'',
            star:'',
            lifecycle:'',
            tag:'',
            highFilter:{
              country:'',
              workTime:'',
              follow:''
            }
          },
          time:'',
          star:'',
          lifecycle:'',
          tag:''
        }
      },
      computed:{
        filterData(){
          return {
            time:this.time,
            star:this.star,
            lifecycle:this.lifecycle,
            tag:this.tag
          }
        }
      },
      components:{filterArea},
      methods:{
        getData(){
          this.time = getTime();
          this.star = getStar();
          this.lifecycle = getLifecycle();
          this.tag = getTag();
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style lang="less">
  .m-sellManage-list{
    height: 100%;
    background-color: rgb(242,245,250);
    .m-header-top{
      overflow: hidden;
      margin-bottom: 10px;
      line-height: 28px;
      height: 28px;
      .info{
        font-size: 12px;
        color: #8899a6;
        vertical-align: middle;
      }
    }
  }
</style>
