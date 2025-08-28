<script setup>
import { useAppStore } from "valaxy";
import { onMounted } from "vue";
import "./styles/vue-transition.scss";

const store = useAppStore();

onMounted(() => {
  store.showLoading = false;
});
</script>

<template>
  <NeoNav />
  <Transition name="fade">
    <NeoLoading v-if="store.showLoading" />
  </Transition>
</template>
