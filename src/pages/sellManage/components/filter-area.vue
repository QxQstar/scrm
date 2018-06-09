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
              <span class="item" v-for="data in filterData[item.filed]"
                    @click="chooseFilter([data],item.filed,true);changeActive(index,param.list.length)">
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
            <div class="opt-list">
              <!-- 单选 -->
              <template v-if="!(selectState[param.filed] || {}).state">
                <span v-for="item in filterData[param.filed]"
                  :key="item.value" class="item"
                  @click="chooseFilter([item],param.filed)">
                    {{item.label}}
                </span>
              </template>

              <!-- 多选 -->
              <template v-else>
                <el-checkbox-group v-model="selectState[param.filed].opt">
                  <el-checkbox :label="item.value"
                               :key="item.value"
                               v-for="item in filterData[param.filed]">{{item.label}}</el-checkbox>
                </el-checkbox-group>
                <div class="handle">
                  <el-button size="mini" @click.native="changeSelectState(param.filed)">取消</el-button>
                  <el-button size="mini" :disabled='selectState[param.filed].opt.length <= 0' @click.native="sureMultiple(param.filed)">确定</el-button>
                </div>
              </template>

            </div>
            <div class="btn-group">
              <el-button size="mini" v-if="config.multiple.indexOf(param.filed) > -1 && !selectState[param.filed].state"
                         @click.native="changeSelectState(param.filed)">多选</el-button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {ElButton},
      model: {
        prop: 'filterParam',
        event: 'on-change'
      },
      props:{
        type:{
          type:String,
          default:'contact'
        },
        //已选择的筛选项
        filterParam:{
          type:Object,
          default(){
            return {}
          }
        },
        //筛选项
        filterData:{
          type:Object,
          default(){
            return {}
          }
        },
        config:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data(){
        return{
          //高级选项中选中的项
          activeName:'-1',
          selectState:{}
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
        },
        initData(){
          const multiple = (this.config.multiple || '').split(',');
          const obj = {};
          multiple.forEach(item => {
            obj[item] = {
              state:false,// 是否是多选
              opt:[]// 当为多选时，选中的项
            }
          });
          this.selectState = obj;
        },
        //多选或者取消多选
        changeSelectState(filed){
          this.selectState[filed].opt = [];
          this.selectState[filed].state = !this.selectState[filed].state;
        },
        //确定多选
        sureMultiple(filed){
          const opt = this.selectState[filed].opt.map(value => {
            return this.filterData[filed].find(item => item.value * 1 === value * 1);
          });
          this.chooseFilter(opt,filed);
          this.changeSelectState(filed);
        }
      },
      created(){
        this.initData();
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
        position: relative;
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
          .opt-list{
            float: left;
            width: 100%;
            margin-right: -150px;
            padding-right: 180px;
            .handle{
              margin-top: 20px;
              text-align: center;
            }
          }
          .item{
            font-size: 12px;
            color: #262626;
            margin: 0 15px 0 0;
            cursor: pointer;
          }
          button{
            padding: 5px 10px;
          }
        }
        .btn-group{
          float: left;
          width: 120px;
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
      .el-checkbox__label{
        font-size: 12px;
        color: #262626;
      }
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
