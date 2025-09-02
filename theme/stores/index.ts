import { computed, ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

/**
 * 应用程序加载状态管理 Store
 */
export const useNeoStore = defineStore("neoStore", () => {
  // 状态
  const loadedCount = ref(0);
  const totalLoadCount = ref(1);

  // 操作
  const incrementLoadedCount = () => loadedCount.value++;
  const addTotalLoadCount = (count: number) => {
    if (count && count > 0) {
      totalLoadCount.value += count;
    } else {
      totalLoadCount.value++;
    }
  }; // !!!!!此方法只能在onmounted中调用 如果不在onmounted中调用，会导致totalLoadCount.value多次自增

  // 计算属性
  const showLoading = computed(() => {
    return loadedCount.value < totalLoadCount.value && totalLoadCount.value > 0;
  });

  return {
    loadedCount,
    totalLoadCount,
    incrementLoadedCount,
    addTotalLoadCount,
    showLoading,
  };
});

// 热模块替换支持
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNeoStore, import.meta.hot));
}
