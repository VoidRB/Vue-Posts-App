<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
defineProps({
  id: { type: Number, default: 100 },
});
</script>

<template>
  <div class="m-2 h-full max-w-full">
    <form
      class="flex h-full flex-col items-center justify-evenly"
      :action="'/api/posts/addpost/' + id"
      method="post"
    >
      <label>Title</label>
      <input
        class="min-w-full border-2 border-black p-1 transition-all focus:p-2 focus:shadow-2xl"
        type="text"
        name="title"
        required
        maxlength="16"
      />
      <label>Content</label>
      <textarea
        class="h-96 w-full resize-none border-2 border-black p-2 transition-all focus:shadow-2xl"
        name="Content"
        id="Content"
        type="text"
        required
      ></textarea>
      <button
        class="mb-11 border-2 border-t-0 border-black p-2 pl-4 pr-4 active:shadow-inner active:shadow-black"
        type="submit"
        @click="toast('Added Post')"
      >
        Add a post
      </button>
    </form>
  </div>
</template>
