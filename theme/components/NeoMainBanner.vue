<script setup>
import { computed, onMounted, ref } from "vue";
import { useThemeConfig } from "../composables";

const themeConfig = useThemeConfig();
const bg = ref("");
const bannerConfig = computed(() => themeConfig.value.Banner);

/**
 * 随机选择背景
 * @param {string[]} backgrounds - 背景数组
 * @returns {string} - 处理后的背景样式
 */
function getRandomBackground(backgrounds) {
  if (!Array.isArray(backgrounds) || backgrounds.length === 0) {
    throw new Error("背景列表必须是一个非空数组");
  }

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];

  // 如果是有效的URL，返回url()格式，否则直接返回
  try {
    new URL(background);
    return `url("${background}")`;
  } catch {
    return background;
  }
}

// 在组件挂载时设置背景
onMounted(() => {
  bg.value = getRandomBackground(bannerConfig.value.background);
});
</script>

<template>
  <div
    class="main-banner"
    :style="{ background: `${bg} no-repeat center/cover` }"
  >
    <div class="mask" />
    <div class="content">
      <div class="title">
        {{ bannerConfig.title }}
      </div>
      <div class="subtitle">
        {{ bannerConfig.subtitle }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-banner {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
