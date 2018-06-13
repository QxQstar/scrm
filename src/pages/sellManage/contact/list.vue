<template>
  <div class="m-sellManage-list">
    <div v-show="!loading">
      <div class="m-header-top">
        <span class="info">共有{{total}}为联系人</span>
        <div class="f-fr">
          <el-input v-model="keyword"  size='mini' placeholder="关键字"/>
          <el-button size="mini">新增联系人</el-button>
        </div>
      </div>
      <!--筛选区域-->
      <filter-area v-model="filterParam"
                   type='contact'
                   :config="{
                    multiple:'star,lifecycle,tag,follow'
                  }"
                   @on-update="fetchData"
                   :filterData="filterData"/>

    <!--列表-->
      <div class="btn-handle">
        <el-button size="mini" type="primary" class="f-fr">自定义表头</el-button>
      </div>
      <go-fix-height v-model="tb_height" :config="{cls:['.m-header-top','.m-filter-area','.btn-handle']}"style="display: none"/>
      <el-table
        :key="tb_height"
        :data="tb_data"
        :max-height="tb_height"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          :label="col.name"
          v-for="col,index in tb_col"
          :key="index"
          width="180">
          <template slot-scope="scope">
           <show-filed :data="scope.row" :filed="col.key"/>
          </template>
        </el-table-column>
      </el-table>


    </div>
    <go-loading v-show="loading"/>

  </div>
</template>

<script>
    import filterArea from './../components/filter-area.vue';
    import showFiled from './showFiled.vue';
    import {getTime,getStar,getLifecycle,getTag,getContact,getTabCols} from '@/dataCenter/salesManage/contact.js';

    export default {
      data(){
        return {
          //联系人总数
          total:0,
          tb_data:[],
          tb_col:[],
          tb_height:0,
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
          tag:'',
          follow:'',
          loading:false
        }
      },
      computed:{
        filterData(){
          return {
            time:this.time,
            star:this.star,
            lifecycle:this.lifecycle,
            tag:this.tag,
            follow:this.follow,
            workTime:[{
              label:'工作时间',
              value:1
            },{
              label:'非工作时间',
              value:2
            }],
            country:[{
              value:1,
              label:'中国'
            }]
          }
        }
      },
      components:{filterArea,showFiled},
      methods:{
        getFilterData(){
          this.time = getTime();
          this.star = getStar();
          this.lifecycle = getLifecycle();
          this.tag = getTag();
          this.follow = this.$store.state.base.member_list.map(item => {
            return {
              label:item.member_name,
              value:item.member_id
            }
          });
        },
        fetchData(filterParam){
          this.loading = false;
          const param = {
            time:JSON.stringify(filterParam.time || []),
            star:JSON.stringify(filterParam.star || []),
            lifecycle:JSON.stringify(filterParam.lifecycle || []),
            country:JSON.stringify(filterParam.highFilter.country || []),
            workTime:JSON.stringify(filterParam.highFilter.workTime || []),
            follow:JSON.stringify(filterParam.highFilter.follow || []),
          };
          const resData = getContact(param);
          this.tb_data = resData.data || [];
          this.total = resData.data.length;
        },
        //获取表头
        getCols(){
          const cols = getTabCols();
          this.tb_col.push({
            key:'my_base_msg',
            name:'基本信息'
          },{
            key:'contact_methods',
            name:'联系方式'
          });
          cols.forEach(col => {
            if('first_name,last_name,customer,position,email,phone,mobile'.indexOf(col.key) < 0){
              this.tb_col.push(col);
            }
          })
        }
      },
      created(){
        this.getFilterData();
        this.fetchData(this.filterParam);
        this.getCols();
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
    .btn-handle{
      overflow: hidden;
      padding: 10px;

    }
  }
</style>
