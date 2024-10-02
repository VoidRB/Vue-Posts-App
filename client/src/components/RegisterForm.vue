<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
</script>

<template>
  <form
    class="mt-40 flex flex-col items-center"
    action="/api/register"
    method="post"
    autocomplete="off"
  >
    <h1 class="mb-5 text-3xl">Register form</h1>
    <hr class="border-1 mb-5 w-1/2 border-black" />
    <label for="username">Username</label>
    <input
      class="border-2 border-black p-1 transition-all focus:p-2 focus:shadow-2xl"
      type="username"
      name="RegUsername"
      id="RegUsername"
      autofocus
      required
    />
    <label for="password">Password</label>
    <input
      class="border-2 border-black p-1 transition-all focus:p-2 focus:shadow-2xl"
      type="password"
      name="RegPassword"
      id="RegPassword"
      required
    />
    <button
      class="m-4 border-2 border-black p-2 pl-4 pr-4 shadow-lg active:shadow-inner active:shadow-black"
      type="submit"
    >
      Register
    </button>
  </form>
</template>
