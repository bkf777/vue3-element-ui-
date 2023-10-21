<template>
  <div class="logo" :class="{ fold: !topStore.fold ? true : false }">
    <Vue3Lottie :animationData="AstronautJSON" :height="50" :width="50" />
    <span>
      <slot name="title"> </slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import { useTopStore } from "@/store/modules/top";
import AstronautJSON from "@/assets/images/logo.json";

const topStore = useTopStore();
</script>
<style scoped lang="scss">
.logo {
  height: $base-menu-logo-height;
  width: 100%;
  display: flex;
  position: relative;
  span {
    width: 200px;
    font-size: 15px;
    color: $base-logo-title-color;
    margin-left: 50px;
    position: absolute;
    font-size: $base-logo-title-fontSize;
    left: 60%;
    top: 50%;
  }
  &.fold {
    transform: translateX(-30%);
    span {
      margin-left: 20px;
    }
  }
}
</style>
