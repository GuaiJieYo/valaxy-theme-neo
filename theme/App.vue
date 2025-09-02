<script setup>
import { onMounted } from "vue";
import { useNeoStore } from "./stores";
import "./styles/vue-transition.scss";

const neoStore = useNeoStore();

onMounted(() => {
  neoStore.incrementLoadedCount();
});
</script>

<template>
  <NeoNav />
  <Transition name="fade">
    <NeoLoading v-if="neoStore.showLoading" />
  </Transition>
</template>
