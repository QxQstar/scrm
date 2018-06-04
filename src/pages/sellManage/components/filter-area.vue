<template>
  <div class="m-filter-area">
    <template v-for="param in all_params">
      <!--高级筛选-->
      <div class="filter-item filter-item-high"  :key="param.filed" v-if=" param.list && showFilterItem(param)">

      </div>
      <!--非高级筛选-->
      <div class="filter-item" v-if="!param.list && !filterParam[param.filed]">
        <div class="filter-row">
          <span class="info filter-cell">{{param.label}}</span>
          <div class="option filter-cell">
            ddd
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
      model: {
        prop: 'filterParam',
        event: 'on-change'
      },
      props:{
        type:{
          type:String,
          default:'contact'
        },
        //筛选参数
        filterParam:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data(){
        return{

        }
      },
      computed:{
        //全部搜索字段
        all_params(){
          return {
            contact:[
              {label:'未联系时间',filed:'time'},
              {label:'系统评级',filed:'star'},
              {label:'生命周期',filed:'lifecycle'},
              {label:'标签',filed:'tag'},
              {
                label:'高级筛选',
                filed:'highFilter',
                list:[{label:'国家', filed:'country'},{label:'工作时间',filed:'workTime'},{label:'跟进人',filed:'follow'}]
              }
            ],
          }[this.type]
        }
      },
      methods:{
        showFilterItem(){

        }
      }
    }
</script>

<style lang="less" scoped>
  .m-filter-area{
    background-color: #ffffff;
    padding: 0 5px;
    .filter-item{
      display: table;
      width: 100%;
      table-layout: fixed;
      .filter-row{
        display: table-row;
        .info{
          width: 70px;
          text-align: right;
          padding-right: 5px;
          font-size: 12px;
          color: #8899a6;
        }
        .filter-cell{
          display: table-cell;
          vertical-align: text-top;
        }
      }
    }
  }
</style>
