<template>
  <div class="right">
    <div class="btn">
      <el-button icon="Refresh" circle @click="updateRefsh" />
      <el-button icon="Delete" circle />
      <el-button icon="FullScreen" circle @click="fullScreen" />
    </div>
    <div class="select">
      <img
        :src="userStore.avatar"
        alt=""
        style="width: 30px; height: 30px; border-radius: 50%"
      />
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>{{ userStore.username }}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="Logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTopStore } from "@/store/modules/top";
import { useUserStore } from "@/store/modules/user";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";

const userStore = useUserStore();
const $router = useRouter();
const $route = useRoute();

const Logout = async () => {
  await userStore.userLogout();
  try {
    setTimeout(() => {
      ElMessage.success("退出成功");
    }, 0);
    $router.push({ path: "/login", query: { redirect: $route.path } });
  } catch (error: any) {
    ElMessage.error(error.message);
  }
};
const fullScreen = () => {
  let full = document.fullscreenElement;
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen();
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
  }
};
const updateRefsh = () => {
  useTopStore().flash = !useTopStore().flash;
};
</script>

<style scoped lang="scss">
.right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  align-items: center;
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }

  .select {
    display: flex;
    align-items: center;
  }
}
</style>
