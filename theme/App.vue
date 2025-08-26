<template>
  <NeoNav></NeoNav>
  <Transition name="fade">
    <Loading v-if="store.showLoading"></Loading>
  </Transition>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAppStore } from 'valaxy';
import "./styles/vue-transition.scss"

let store = useAppStore();

onMounted(() => {
  store.showLoading = false;
})
</script>