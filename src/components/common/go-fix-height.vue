<template>
  <div class="g-fix-height" v-getHeight="this">
    <go-scrollbar>
      <slot></slot>
    </go-scrollbar>
  </div>
</template>

<script>
    export default {
      name: "go-fix-height",
      props:{
        config:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      directives:{
        getHeight:{
          inserted(el,binding){
            const vm = binding.value,
              cls = ['.g-header-top'];
             let totalH = $(document).height() - (vm.config.offset || 0);
            if(vm.config.cls){
              cls.push(...vm.config.cls)
            }
            cls.forEach(className => {
              totalH -= $(className).outerHeight(true)
            });
            vm.$emit('input',totalH);
            $(el).css({
              height:totalH + 'px'
            });
          }
        }
      }
    }
</script>

<style scoped>

</style>
