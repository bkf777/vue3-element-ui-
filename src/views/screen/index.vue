<template>
  <div class="container">
    <div class="screen" ref="screen">
      <div class="top">
        <top></top>
      </div>
      <div class="bottom">
        <div class="left">
          <age></age>
          <sex></sex>
        </div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import age from "./charts/age/index.vue";
import sex from "./charts/sex/index.vue";
import top from "./top/index.vue";

onMounted(() => {
  let scale = getScale();
  screen.value.style.transform = `scale(${scale}) translate(-50%,-50%)`;
});

let screen = ref();
const getScale = (width = 1920, height = 1080) => {
  let scaleX = window.innerWidth / width;
  let scaleY = window.innerHeight / height;
  return scaleX < scaleY ? scaleX : scaleY;
};
window.onresize = () => {
  let scale = getScale();
  screen.value.style.transform = `scale(${scale}) translate(-50%,-50%)`;
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url("@/views/screen/imgs/bg.png") no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }
    .bottom {
      width: 100%;
      display: flex;
      margin: 10px;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .center {
        flex: 2;
      }
      .right {
        flex: 1;
      }
    }
  }
}
</style>
