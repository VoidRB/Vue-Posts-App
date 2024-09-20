<script setup>
import { useToast } from 'vue-toastification';

const toast = useToast();
defineProps({
  id: { type: Number, default: 100 },
});
</script>

<template>
  <div class="m-2 h-full max-w-full">
    <form
      class="items-start justify-evenly flex flex-col h-full"
      :action="'/api/posts/addpost/' + id"
      method="post"
    >
      <label>Title</label>
      <input
        class="p-1 min-w-full border-2 border-black focus:p-2 transition-all focus:shadow-2xl"
        type="text"
        name="title"
        required
        maxlength="16"
      />
      <label>Content</label>
      <textarea
        class="p-1 resize-none w-full h-96 focus:p-2 transition-all focus:shadow-2xl border-2 border-black"
        name="Content"
        id="Content"
        type="text"
        required
      ></textarea>
      <button
        class="p-2 pr-4 pl-4 mb-11 border-t-0 border-2 border-black active:shadow-inner active:shadow-black"
        type="submit"
        @click="toast('Added Post')"
      >
        Add a post
      </button>
    </form>
  </div>
</template>
