<template>
    <div class="g-layout">
      <div class="g-header-top">
        <div class="content f-clear">
          <span class="logo">Marketing CRM</span>
          <div class="f-fr">
            <div class="link" v-for="menu in topMenu">
            <span :class="menu.icon" class="icon">
              <span class="text">{{menu.name}}</span>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div class="g-content">
        <div class="g-menu-left" :class="{isCollapse:isCollapse}">
          <div class="g-menu-state">
            <span class="iconfont" :class="isCollapse?'icon-zhankai':'icon-shouqi'" @click="isCollapse = !isCollapse"></span>
          </div>
          <!--导航-->
          <el-menu :default-active="current" :default-openeds='open' class="menu-list" @select='handleSelect' @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <template v-for="menu,index in leftMenu">
              <el-menu-item :index="index + ''" v-if="!menu.children">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.name}}</span>
              </el-menu-item>
              <el-submenu :index="index + ''"
                          :class="{current:current.split('-')[0] + ''=== index + ''}" v-else>
                <template slot="title">
                  <i :class="menu.icon"></i>
                  <span slot="title">{{menu.name}}</span>
                </template>
                <el-menu-item-group >
                  <el-menu-item v-for="subMenu,subIndex in menu.children"
                                :index="index + '-' + subIndex"
                                :key="index + '-' + subIndex">{{subMenu.name}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </el-menu>
        </div>
        <div class="g-main" :class="{bigger:isCollapse}">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
  import {topMenu,leftMenu} from '@/global/menu.js';
  export default {
    name: "layout",
    data(){
      return {
        topMenu:topMenu,
        leftMenu:leftMenu,
        isCollapse:false,
        current:'1',
        open:['1']
      }
    },
    methods:{
      //展开sub-menu选中第一项
      handleOpen(index){
        this.current = index + '-0';
      },
      handleClose(){
        // todo
      },
      handleSelect(current){
        this.current = current + '';
      }
    }
  }
</script>

<style scoped>

</style>
