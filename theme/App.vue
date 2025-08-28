<script setup>
import { computed, onMounted } from "vue";
import { useNeoStore } from "./stores";
import "./styles/vue-transition.scss";

const store = useNeoStore();

onMounted(() => {
  store.loadedCount++;
});
</script>

<template>
  <NeoNav />
  <Transition name="fade">
    <NeoLoading v-if="store.showLoading" />
  </Transition>
</template>
