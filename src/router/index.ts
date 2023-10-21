import { createRouter, createWebHistory } from "vue-router";
import routes from "./routers";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import pinia from "../store/index";
import { useUserStore } from "../store/modules/user";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  document.title = `Super backend-----${to.meta.title} `;
  nprogress.start();
  // const hasToken = localStorage.getItem("TOKEN")
  const hasToken = useUserStore(pinia).token;
  const hasUsername = useUserStore(pinia).username;
  if (!hasToken) {
    if (to.path === "/login") {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  } else {
    if (!hasUsername) {
      await useUserStore(pinia).getUserInfo();
      try {
        next();
      } catch (error) {
        await useUserStore(pinia).userLogout();
        next(`/login?redirect=${to.path}`);
      }
    } else {
      if (to.path === "/login") {
        next("/");
      } else {
        next();
      }
    }
  }
});
router.afterEach(() => {
  nprogress.done();
});

export default router;
