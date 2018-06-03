<template>
    <div class="go-scrollbar" v-scroll="{vm:this}">
      <slot></slot>
    </div>
</template>

<script>
    export default {
      name: "go-scrollbar",
      props:{
        //向滚动条插件传入的配置参数
        config:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data(){
        return {
          baseConf:{
            height:'auto'
          }
        }
      },
      directives:{
        scroll:{
          bind(el,binding){
            const vm = binding.value.vm;
            import(/* webpackChunkName: "jqueryScroll" */'jquery-slimscroll').then(() =>{
              $(el).slimScroll(Object.assign(vm.baseConf,vm.config));
            })
          }
        }
      }
    }
</script>

<style scoped>

</style>
