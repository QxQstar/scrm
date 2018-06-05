<template>
  <div class="m-filter-area">
    <!--已选项-->
    <div class="select-filter" v-if="selected.length > 0">
      <span class="info">已选</span>
      <span class="select-item" v-for="item,index in selected" :key="index" @click="chooseFilter('',item.filed)">
        {{item.showValue}}
      </span>
    </div>
    <template v-for="param in all_params">
      <!--高级筛选-->
      <div class="filter-item filter-item-high"  :key="param.filed" v-if=" param.list && showFilterItem(param)">

      </div>
      <!--非高级筛选-->
      <div class="filter-item" v-if="!param.list && !filterParam[param.filed]">
        <div class="filter-row">
          <span class="info filter-cell">{{param.label}}</span>
          <div class="option filter-cell">
            <span v-for="item in filterData[param.filed]" :key="item.value" class="item" @click="chooseFilter([item],param.filed)">{{item.label}}</span>
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
        },
        filterData:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data(){
        return{
          time:'',

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
        },
        //已经选择的筛选项
        selected(){
          const is_object = (data) => {
            return Object.prototype.toString.call(data) === "[object Object]";
          };
          const result = [], fn = (obj,parentFiled = '') => {
            const keys = Object.keys(obj),len = keys.length;
            for(let i = 0; i < len ; i++){
              const key = keys[i], item = obj[key];
              if(item){
                if(is_object(item)){
                  fn(item,key);
                } else {
                  const filterItem = {
                    filed:key,
                    parentFiled:parentFiled,
                    showValue:[]
                  };
                  item.forEach(data => {
                    filterItem.showValue.push(data.label);
                  });
                  filterItem.showValue = filterItem.showValue.join(',');
                  result.push(filterItem);
                }
              }
            }
          };
          fn(this.filterParam);
          return result;
        }
      },
      methods:{
        chooseFilter(data,filed){
          this.filterParam[filed] = data;
          this.$emit('on-change',this.filterParam);
        },
        showFilterItem(){
          return false;
        }
      }
    }
</script>

<style lang="less" scoped>
  .m-filter-area{
    background-color: #ffffff;
    .select-filter{
      background-color: rgb(242,245,250);
      padding-bottom: 5px;
      font-size: 12px;
      .info{
        color: #8899a6;
      }
      .select-item{
        display: inline-block;
        margin: 5px;
        color: #05a9b3;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        background-color: rgb(182, 250, 225);
        padding: 2px 4px;
        cursor: pointer;
      }
    }
    .filter-item{
      display: table;
      width: 100%;
      table-layout: fixed;
      .filter-row{
        display: table-row;
        .filter-cell{
          display: table-cell;
          padding: 10px 0;
          vertical-align: text-top;
          border-bottom: 1px solid #ebebeb;
        }
        .info{
          width: 80px;
          text-align: right;
          padding-right: 10px;
          font-size: 12px;
          color: #8899a6;
        }
        .option{
          .item{
            font-size: 12px;
            color: #262626;
            margin: 0 15px 0 0;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
