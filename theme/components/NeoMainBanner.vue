<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useNeoStore } from "../stores";
import { useThemeConfig } from "../composables";

const themeConfig = useThemeConfig();
const neoStore = useNeoStore();

neoStore.addTotalLoadCount(2); // 增加需要加载组件数量

// Refs
const bg = ref("");
const saying = ref("海内存知己，天涯若比邻。");
const typedText = ref("");
const typingIntervalId = ref(null);

// Computed
const bannerConfig = computed(() => themeConfig.value.Banner);

/**
 * 随机选择背景
 * @param {string[]} backgrounds - 背景数组
 * @returns {string} - 处理后的背景样式
 * 需要等待加载完成后才能显示
 */
function getRandomBackground(backgrounds) {
  if (!Array.isArray(backgrounds) || backgrounds.length === 0) {
    console.error("背景列表必须是一个非空数组");
    return "";
  }

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];

  // 如果是有效的URL，返回url()格式，否则直接返回
  try {
    new URL(background);
    // 预加载背景图
    const image = new Image();
    image.src = background;
    image.onload = () => {
      neoStore.incrementLoadedCount();
    };
    return `url("${background}")`;
  } catch {
    return background;
  }
}

/**
 * 获取一言数据
 * 需要等待加载完成后才能显示
 */
async function fetchSaying() {
  try {
    const response = await fetch("https://v1.hitokoto.cn/?c=i");
    const data = await response.json();
    neoStore.incrementLoadedCount();
    return data.hitokoto || "海内存知己，天涯若比邻。";
  } catch (error) {
    console.error("获取一言失败:", error);
    return "海内存知己，天涯若比邻。";
  }
}

/**
 * 执行打字机动画效果
 */
function startTypingAnimation(text) {
  let index = 0;
  typedText.value = "";

  // 清除之前的定时器
  if (typingIntervalId.value) {
    clearInterval(typingIntervalId.value);
  }

  typingIntervalId.value = setInterval(() => {
    if (neoStore.showLoading) return;

    if (index < text.length) {
      typedText.value += text.charAt(index);
      index++;
    } else {
      clearInterval(typingIntervalId.value);
      typingIntervalId.value = null;
    }
  }, 150);
}

// 在组件挂载时设置背景
onMounted(async () => {
  bg.value = getRandomBackground(bannerConfig.value.background);

  // 获取一言
  const sayingText = await fetchSaying();
  saying.value = sayingText;

  // 执行打字机动画
  startTypingAnimation(sayingText);
});

// 组件卸载时清理定时器
onUnmounted(() => {
  if (typingIntervalId.value) {
    clearInterval(typingIntervalId.value);
  }
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
        <!-- 等待加载动画完成后再进行 -->
        <span
          v-for="(tv, ti) in bannerConfig.title"
          :class="{ popup: !neoStore.showLoading }"
          :style="`animation-delay: ${ti * 0.1 + 0.5}s;`"
          :key="ti"
        >
          {{ tv }}
        </span>
      </div>
      <div class="subtitle">
        <span
          :class="{ popup: !neoStore.showLoading }"
          :style="`animation-delay: ${(bannerConfig.title.length - 1) * 0.1 + 0.8}s;`"
        >
          {{ bannerConfig.subtitle }}
          <span class="inputCursor"> _ </span>
        </span>
      </div>
      <div v-show="typedText" class="saying">
        <span class="sentence">
          {{ typedText }}
        </span>
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
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  .popup {
    animation: popUp 0.3s ease-in-out both;
  }

  span {
    display: inline-block;
    white-space: pre;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
  }

  .content {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    line-height: normal;

    .title {
      font-size: 5em;
    }

    .subtitle {
      font-size: 2em;
      color: #eee;

      .inputCursor {
        animation: blink 0.7s linear infinite;
      }
    }

    .saying {
      position: absolute;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;

      .sentence {
        user-select: text;
      }
    }
  }
}

@keyframes popUp {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
