<template>
  <div class="top">
    <bread></bread>
    <setting></setting>
  </div>
</template>

<script setup lang="ts">
import setting from "./setting/index.vue";
import bread from "./bread/index.vue";
</script>
<script lang="ts">
export default {
  name: "top",
};
</script>
<style scoped lang="scss">
.top {
  display: flex;
  background: $base-tabbar-background;
  align-items: center;
  justify-content: space-between;
}
</style>
