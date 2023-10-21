import { defineStore } from "pinia";
import { reqLogin, reqUserInfo, reqLogout } from "@/api/user";
import {
  loginFormData,
  userInfoResponseData,
  loginResponseData,
} from "@/api/user/type";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
import { UserState } from "../type/type";
import router from "@/router/routers";

export let useUserStore = defineStore("user", {
  state: (): UserState => ({
    token: GET_TOKEN() || "",
    menuRoutes: router,
    username: "",
    avatar: "",
    buttons: [],
  }),
  actions: {
    async userLogin(data: loginFormData) {
      let res: loginResponseData = await reqLogin(data);
      console.log(res.data);
      if (res.code === 200) {
        this.token = res.data as string;
        SET_TOKEN(res.data as string);
        return Promise.resolve(res);
      } else {
        return Promise.reject(new Error(res.data));
      }
    },
    async getUserInfo() {
      let res: userInfoResponseData = await reqUserInfo();
      if (res.code === 200) {
        this.username = res.data.name;
        this.avatar = res.data.avatar;
        this.buttons = res.data.buttons;
        return Promise.resolve(res.message);
      } else {
        return Promise.reject(new Error(res.message));
      }
    },
    async userLogout() {
      const res = await reqLogout();
      if (res.code === 200) {
        this.token = "";
        REMOVE_TOKEN();
        return Promise.resolve(res);
      } else {
        return Promise.reject(new Error(res.message));
      }
    },
  },
  getters: {},
});
