<script setup>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import { reactive } from "vue";

const state = reactive({
  formState: Boolean,
  default: true,
});
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <button
      class="m-4 border-2 border-black p-2 pl-4 pr-4 shadow-lg active:shadow-inner active:shadow-black"
      @click="state.formState = !state.formState"
    >
      Switch
    </button>
    <div v-if="state.formState">
      <LoginForm />
    </div>
    <div v-else>
      <RegisterForm />
    </div>
  </div>
</template>
