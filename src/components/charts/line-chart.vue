<template>
  <div class="g-line-chart"></div>
</template>

<script>
  import "echarts/lib/chart/bar";
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/title";
    export default {
      props:{
        option:{
          type:Object,
          required:true
        }
      },
      name: "line-chart",
      methods:{
        drawLine(echarts){
          const lineChart = echarts.init(this.$el);
          lineChart.setOption(this.option);
        }
      },
      mounted(){
        import('echarts/lib/echarts').then((echarts) => {
          this.drawLine(echarts);
        })
      }
    }
</script>

<style scoped>

</style>
