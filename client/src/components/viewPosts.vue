<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const props = defineProps({
  id: { type: Number, default: 100 },
});

const state = reactive({
  postTitle: { type: String },
  postContent: { type: String },
  postSwitcher: {
    type: Number,
  },
  posts: {
    type: Array,
    default: [],
  },
});

state.postSwitcher = 1;

onMounted(async () => {
  try {
    const response = await axios.get('/api/posts/viewposts/' + props.id);
    state.posts = response.data;
  } catch (error) {
    throw error;
  }
});
</script>

<template>
  <div class="m-2 max-w-full flex flex-row">
    <section class="w-4/5 min-h-full p-1 border-2 flex-col flex border-black">
      <h1 class="underline">
        {{ state.postTitle }}
      </h1>
      <p>
        {{ state.postContent }}
      </p>
    </section>
    <section class="h-full border-l-0 w-1/5 border-2 border-black">
      <div class="h-full" v-for="post in state.posts">
        <button
          @click="
            (state.postSwitcher = post.id),
              (state.postTitle = post.title),
              (state.postContent = post.content)
          "
          class="border-b-2 p-1 w-full border-black focus:shadow-inner focus:shadow-black"
        >
          {{ post.title }}
        </button>
      </div>
    </section>
  </div>
</template>
