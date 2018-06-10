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
    </div>
    <go-loading v-show="loading"/>



  </div>
</template>

<script>
    import filterArea from './../components/filter-area.vue';
    import {getTime,getStar,getLifecycle,getTag,getFollow,getContact} from '@/dataCenter/salesManage/contact.js';
    import GoLoading from "../../../components/common/go-loading";
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
      components:{
        GoLoading,
        filterArea},
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
          this.loading = true;
          const param = {
            time:JSON.stringify(filterParam.time || []),
            star:JSON.stringify(filterParam.star || []),
            lifecycle:JSON.stringify(filterParam.lifecycle || []),
            country:JSON.stringify(filterParam.highFilter.country || []),
            workTime:JSON.stringify(filterParam.highFilter.workTime || []),
            follow:JSON.stringify(filterParam.highFilter.follow || []),
          };
          getContact(param)
        }
      },
      created(){
        this.getFilterData();
        this.fetchData(this.filterParam);
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
