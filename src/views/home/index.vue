<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar" alt="" class="avatar" />
      <div class="bottom">
        <span style="font-size: larger; font-weight: 700; color: #55dcca">{{
          userStore.username
        }}</span>

        <h3 class="title">{{ getTime() }}呀</h3>
        <p class="subtitle">AABBc</p>
      </div>
    </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { getTime } from "@/utils//getTime";
//引入用户相关的仓库,获取当前用户的头像、昵称
import { useUserStore } from "@/store/modules/user";
//获取存储用户信息的仓库对象
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }

    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}

.bottoms {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
