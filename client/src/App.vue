<script setup>
import { RouterView } from "vue-router";

</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="page">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
