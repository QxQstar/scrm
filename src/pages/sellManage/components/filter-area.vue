<template>
  <div class="m-filter-area">
    <!--已选项-->
    <div class="select-filter" v-if="selected.length > 0">
      <span class="info">已选</span>
      <span class="select-item" v-for="item,index in selected" :key="index" @click="chooseFilter('',item.filed,item.is_higher)">
        {{item.showValue}}
      </span>
    </div>
    <template v-for="param in all_params">
      <!--高级筛选-->
      <div class=" filter-item-high"  :key="param.filed" v-if=" param.list && showFilterItem(param)">
        <span class="info ">高级选项</span>
        <div class="option ">
          <el-tabs type="border-card" :value="activeName">
            <el-tab-pane :label="item.label"
                         v-for="item,index in param.list"
                         :name="index + ''"
                         :key="item.filed"
                         v-if="!filterParam.highFilter[item.filed]">
              <span class="item" v-for="data in filterData[item.filed]" @click="chooseFilter([data],item.filed,true);changeActive(index,param.list.length)">
                {{data.label}}
              </span>
            </el-tab-pane>
          </el-tabs>
        </div>
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
          //高级选项中选中的项
          activeName:'0',
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
          const result = [], fn = (obj,is_higher = false) => {
            const keys = Object.keys(obj),len = keys.length;
            for(let i = 0; i < len ; i++){
              const key = keys[i], item = obj[key];
              if(item){
                if(is_object(item)){
                  fn(item,true);
                } else {
                  const filterItem = {
                    filed:key,
                    is_higher:is_higher,
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
        changeActive(index,length){
          if(index * 1 + 1 < length){
            this.activeName = index + 1 + '';
          } else {
            this.activeName = index - 1 + '';
          }
        },
        chooseFilter(data,filed,is_higher){
          if(is_higher){
            this.filterParam.highFilter[filed] = data;
          } else {
            this.filterParam[filed] = data;
          }

          this.$emit('on-change',this.filterParam);
        },
        showFilterItem(){
          const highFilter = this.filterParam.highFilter,keys = Object.keys(highFilter);
          //在高级选项中只要存在一个选项未选就要显示高级选项
          return keys.some(key => !highFilter[key]);
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
          vertical-align: top;
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
    .filter-item-high{
      position: relative;
      &>.info{
        position: absolute;
        top:5px;
        left: 20px;
        color: #8899a6;
      }
      &>.option{
        margin-top: 5px;
        .item{
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
</style>
<style lang="less">
  .m-filter-area{
    .option {
      .el-tabs--border-card{
        box-shadow: none;
        border-left: none;
        border-top: none;
        border-bottom: none;
        .el-tabs__item{
          margin: 0;
          font-size: 12px;
          height: 31px;
          line-height: 31px;
          color: #262626;
          &:hover{
            color: #262626;
          }
        }
        .el-tabs__nav{
          margin-top: 1px;
          font-size: 12px;
          .is-active{
            border-top: 1px solid #ebebeb;
            color: #262626;
          }
        }
      }
      .el-tabs--border-card>.el-tabs__header{
        padding-left: 80px;
        background-color: transparent;
      }
    }
  }
</style>
