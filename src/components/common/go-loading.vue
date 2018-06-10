<template>
    <div class="g-loading" :style="{height:config.height||'300px'}">
      <div class="main">
        <mu-circular-progress class="demo-circular-progress" :size="25"/>
        <div class="loading-text">
          <slot>
            加载中
          </slot>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "go-loading",
      props:{
        config:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .g-loading{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:center;
  }
  .loading-text{
    margin-top: 10px;
    font-size: 12px;
    color: #8899a6;
  }
</style>
