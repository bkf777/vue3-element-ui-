import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "virtual:svg-icons-register";
import Pinia from "./store/index";
import "@/styles/index.scss";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import gloablComponent from "./components/index";

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.use(Pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(gloablComponent);
app.mount("#app");
