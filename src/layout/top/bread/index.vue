<template>
  <component
    :is="topStore.fold ? 'Expand' : 'Fold'"
    width="20"
    @click="changeCollapse"
  ></component>
  <el-breadcrumb :separator-icon="'ArrowRight'">
    <el-breadcrumb-item
      v-for="(item, index) in routes.matched"
      :key="item.path"
      :to="{ path: item.path }"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useTopStore } from "@/store/modules/top";

const routes = useRoute();
const topStore = useTopStore();

const changeCollapse = () => {
  topStore.fold = !topStore.fold;
};
</script>
