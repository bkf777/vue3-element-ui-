import { defineStore } from "pinia";

export const useTopStore = defineStore("topStore", {
  state: () => ({
    fold: false,
    flash: false,
  }),
  actions: {},
  getters: {},
});
