<script setup>
import { onMounted, ref, computed } from "vue";
import { useNeoStore } from "../stores";
import { useThemeConfig } from "../composables";

const themeConfig = useThemeConfig().value.LoadingPage;
const stillLoading = ref(false);
const store = useNeoStore();

// 判断是否启用loading
if (themeConfig.enable) {
  // 启用延迟弹出信息
  const delay = setTimeout(() => {
    stillLoading.value = true;
  }, themeConfig.timeout);

  // 挂载网页后取消延迟
  computed(() => {
    if (!store.showLoading) clearTimeout(delay);
  });
}
</script>

<template>
  <div v-if="themeConfig.enable" class="NeoLoading">
    <div class="loader" />
    <div class="text" :class="{ show: stillLoading }">
      {{ themeConfig.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.NeoLoading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text {
    cursor: default;
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s ease;

    &.show {
      opacity: 1;
      transform: none;
    }
  }

  .loader {
    width: 5em;
    height: 5em;
    transform: rotate(165deg);
    box-shadow: 5px #000;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 1em;
      height: 1em;
      border-radius: 0.5em;
      transform: translate(-50%, -50%);
      animation: before 2s infinite;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 1em;
      height: 1em;
      border-radius: 0.5em;
      transform: translate(-50%, -50%);
      animation: after 2s infinite;
    }
  }
}

@keyframes before {
  0% {
    width: 1em;
    box-shadow:
      2em -1em rgba(225, 20, 98, 0.75),
      -2em 1em rgba(111, 202, 220, 0.75);
  }

  35% {
    width: 5em;
    box-shadow:
      0 -1em rgba(225, 20, 98, 0.75),
      0 1em rgba(111, 202, 220, 0.75);
  }

  70% {
    width: 1em;
    box-shadow:
      -2em -1em rgba(225, 20, 98, 0.75),
      2em 1em rgba(111, 202, 220, 0.75);
  }

  100% {
    box-shadow:
      2em -1em rgba(225, 20, 98, 0.75),
      -2em 1em rgba(111, 202, 220, 0.75);
  }
}

@keyframes after {
  0% {
    height: 1em;
    box-shadow:
      1em 2em rgba(61, 184, 143, 0.75),
      -1em -2em rgba(233, 169, 32, 0.75);
  }

  35% {
    height: 5em;
    box-shadow:
      1em 0 rgba(61, 184, 143, 0.75),
      -1em 0 rgba(233, 169, 32, 0.75);
  }

  70% {
    height: 1em;
    box-shadow:
      1em -2em rgba(61, 184, 143, 0.75),
      -1em 2em rgba(233, 169, 32, 0.75);
  }

  100% {
    box-shadow:
      1em 2em rgba(61, 184, 143, 0.75),
      -1em -2em rgba(233, 169, 32, 0.75);
  }
}
</style>
