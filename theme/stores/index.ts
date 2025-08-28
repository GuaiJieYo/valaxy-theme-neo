import { computed, ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useNeoStore = defineStore("neoStore", () => {
  let loadedCount = ref(0); // 加载完的组件数量
  let loadcount = ref(2); // 需要加载的组件数量
  let showLoading = computed(() => {
    return loadedCount.value < loadcount.value;
  }); // 是否显示加载动画
  return { loadedCount, showLoading, loadcount };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNeoStore, import.meta.hot));
