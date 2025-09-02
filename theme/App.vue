<script setup>
import { onMounted } from "vue";
import { useNeoStore } from "./stores";
import "./styles/vue-transition.scss";

const store = useNeoStore();
store.addTotalLoadCount(); // 增加需要加载组件数量

onMounted(() => {
  store.incrementLoadedCount();
});
</script>

<template>
  <NeoNav />
  <Transition name="fade">
    <NeoLoading v-if="store.showLoading" />
  </Transition>
</template>
