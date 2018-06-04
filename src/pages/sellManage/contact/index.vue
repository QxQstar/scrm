<template>
  <div class="m-sellManage-contact">
    <component :is="page"/>
  </div>
</template>

<script>
  import detail from './detail.vue';
  import list from './list.vue';
    export default {
       data(){
        return {
          page:'list'
        }
       },
      components:{list,detail},
      methods:{
         checkRouter(){
            const page = this.$route.params.page;
            if(page !== 'list' && page !== 'detail'){
              this.$router.replace({path:'/sellManage/contact/list'});
            } else {
              this.page = page;
            }
            console.log(page);
         }
      },
      watch:{
         '$route'(){
           this.checkRouter();
         }
      },
      created(){
         this.checkRouter();
      }
    }
</script>

<style lang="less">
  @import url("./../../../assets/css/sellManage.less");
  .m-sellManage-contact{
    height: 100%;
  }
</style>
