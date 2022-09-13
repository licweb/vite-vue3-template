import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 1,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
});
