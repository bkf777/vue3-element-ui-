<template>
  <!-- 主体 -->
  <div class="contain">
    <!-- 侧边栏 -->
    <div class="slider" :class="{ fold: topStore.fold ? true : false }">
      <logo>
        <template v-slot:title>
          <span>超级无敌后台</span>
        </template>
      </logo>
      <!-- default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                    active-text-color="#ffd04b" -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#26A69A"
          text-color="white"
          active-text-color="yellowgreen"
          :unique-opened="true"
          :collapse="topStore.fold ? true : false"
          :ellipsis="false"
        >
          <menus :menuList="userStore.menuRoutes"></menus>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- top导航 -->
    <div class="top">
      <top :class="{ fold: topStore.fold ? true : false }"></top>
    </div>
    <!-- 内容展示区域 -->
    <div class="main" :class="{ fold: topStore.fold ? true : false }">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
import logo from "./logo/index.vue";
import Main from "./main/index.vue";
import menus from "./menu/index.vue";
import top from "./top/index.vue";
import { useUserStore } from "@/store/modules/user";
import { useTopStore } from "@/store/modules/top";
import { ElMessage } from "element-plus";
import { onMounted } from "vue";

let topStore = useTopStore();
let userStore = useUserStore();

const getUserInfo = async () => {
  await userStore.getUserInfo();
  try {
    console.log(userStore.username);
  } catch (error: any) {
    ElMessage.error(error.message);
  }
};
onMounted(() => {
  getUserInfo();
});
</script>
<style scoped lang="scss">
.contain {
  height: 100vh;
  width: 100%;

  .slider {
    width: $base_menu_width;
    height: 100%;
    background: $base_menu_background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base_tabbar_height);

      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }

  .top {
    height: $base_tabbar_height;
    width: calc(100% - $base-menu-width);
    position: fixed;
    top: 0;
    left: $base_menu_width;
    background: $base_tabbar_background;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .main {
    position: absolute;
    top: $base_tabbar_height;
    left: $base_menu_width;
    background: #cdfaf6;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base_tabbar_height);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
