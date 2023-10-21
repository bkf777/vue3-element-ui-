<template>
  <template v-for="item in props.menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta?.hide" @click="goRoute">
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有且只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta?.hidden"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta?.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有多个子路由 -->
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="!item.meta?.hide" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta?.icon" />
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <menus :menuList="item.children"></menus>
      </el-sub-menu>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { RouteRecordRaw, useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps<{
  menuList: RouteRecordRaw[];
}>();
const goRoute = (i: any) => {
  $router.push(i.index);
};
</script>
<script lang="ts">
export default {
  name: "menus",
};
</script>
<style scoped>
div {
  color: #ffffff;
}
</style>
