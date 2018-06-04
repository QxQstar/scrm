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
    <filter-area v-model="filterParam"/>
  </div>
</template>

<script>
    import filterArea from './../components/filter-area.vue';
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
          }
        }
      },
      components:{filterArea}
    }
</script>

<style lang="less">
  .m-sellManage-list{
    height: 100%;
    background-color: rgb(242,245,250);
    .m-header-top{
      overflow: hidden;
      margin-bottom: 10px;
      .info{
        font-size: 12px;
        color: #8899a6;
      }
    }
  }
</style>
