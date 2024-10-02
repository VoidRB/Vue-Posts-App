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
state.postTitle = '';
state.postContent =
  'Go and write a post OR Pick one from the List on the right';
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
    <section
      class="w-4/5 h-96 p-1 border-2 flex-col flex border-black focus:p-2 transition-all focus:shadow-2xl"
    >
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
          class="border-b-2 truncate p-2 w-full text-nowrap border-black focus:shadow-inner focus:shadow-black transition-all"
        >
          {{ post.title }}
        </button>
      </div>
    </section>
  </div>
</template>
