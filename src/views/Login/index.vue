<template>
  <div class="login_container">
    <div class="login_form">
      <h1>Welcome</h1>
      <hr />
      <h2>优选商城后台</h2>
      <br />
      <el-form
        :model="formLabelAlign"
        style="min-width: 300px"
        label-position="left"
        :rules="rules"
        ref="ruleForms"
      >
        <el-form-item label="" prop="username">
          <el-input
            v-model="formLabelAlign.username"
            :prefix-icon="UserFilled"
          />
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="formLabelAlign.password"
            :prefix-icon="Lock"
            type="password"
          />
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="login"
          style="margin-left: 50%; transform: translate(-50%)"
          >登录</el-button
        >
      </el-form-item>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserFilled, Lock } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/modules/user";
import { reactive, ref } from "vue";
import { loginFormData } from "@/api/user/type";
import { useRouter, useRoute } from "vue-router";

import { ElMessage } from "element-plus";

let ruleForms = ref();
let loading = ref(false);
const $router = useRouter();
const $route = useRoute();

const formLabelAlign = reactive<loginFormData>({
  username: "admin",
  password: "atguigu123",
});

const validateUsername = (_rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
  if (value.length < 3) {
    callback(new Error("请输入正确用户名"));
  } else {
    callback();
  }
};
const validatePassword = (_rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
  if (value.length < 3) {
    callback(new Error("请输入正确密码"));
  } else {
    callback();
  }
};
const rules = reactive({
  username: [{ validator: validateUsername, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});
const login = async () => {
  loading.value = true;
  await ruleForms.value.validate();
  try {
    await useUserStore().userLogin(formLabelAlign);
    loading.value = false;
    $router.push({ path: ($route.query.redirect as string) || "/" });
    ElMessage.success("登录成功");
  } catch (error) {
    loading.value = false;
    ElMessage({
      message: (error as Error).message,
      type: "error",
    });
  }
};
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: absolute;

    width: 30%;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    background: url("../../assets/images/login_form.png") no-repeat;
    background-size: cover;
  }

  h2 {
    font-size: 20px;
    color: #333;
    font-weight: 400;
    margin-bottom: 20px;
  }
  h1 {
    font-weight: 1000;
    font-size: large;
  }
}
</style>
